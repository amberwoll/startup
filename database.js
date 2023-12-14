const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);

const db = client.db('startup');
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');


// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(uname) {
  return userCollection.findOne({ uname: uname });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(uname, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    uname: uname,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

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
  
  module.exports = { 
    addScore, 
    getHighScores, 
    getTopScoreForUser,
    getUser,
    getUserByToken,
    createUser,
 };
  
  if (require.main === module) {
    testConnection();
}