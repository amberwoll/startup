const express = require('express');
const MongoDB = require('./database.js');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/scores', async (_req, res) => {
  const scores = await MongoDB.getHighScores();
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', async (req, res) => {
  MongoDB.addScore(req.body);
  const scores = await MongoDB.getHighScores();
  res.send(scores);
});

apiRouter.get('/scores/highscore/:username', async (req, res) => {
  const username = req.params.username;
  try {
      const topScore = await MongoDB.getTopScoreForUser(username);
      res.json(topScore);
  } catch (error) {
      res.status(500).send('Error retrieving user high score');
  }
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', {root: 'public'});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
