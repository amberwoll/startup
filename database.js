const { MongoClient } = require('mongodb');

const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);

const db = client.db('startup');
const scoreCollection = db.collection('score');

async function testConnection() {
    try {
        await client.connect();
        console.log("Connected to MongoDB.");
        await db.command({ ping: 1 });
        console.log("MongoDB ping successful.");
        const scores = await getHighScores();
        console.log("High Scores: ", scores);
    } catch (ex) {
        console.error(`Unable to connect to database with ${url} because ${ex.message}`);
        process.exit(1);
    }
}
  
  async function addScore(score) {
    const result = await scoreCollection.insertOne(score);
    return result;
  }
  
  function getHighScores() {
    const query = { score: { $gt: 0, $lt: 900 } };
    const options = {
      sort: { score: -1 },
      limit: 10,
    };
    const cursor = scoreCollection.find(query, options);
    return cursor.toArray();
  }

  async function getTopScoreForUser(username) {
    return await scoreCollection.find({ username: username }).sort({ score: -1 }).limit(1).next();
}
  
  module.exports = { addScore, getHighScores, getTopScoreForUser };
  
  if (require.main === module) {
    testConnection();
}