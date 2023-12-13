const express = require('express');
const app = express();
let scores = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Endpoint to get the current scores
apiRouter.get('/scores', (_req, res) => {
  console.log('called in service')
  console.log(scores)
  res.send(scores);
});

// Endpoint to update the entire scores array
apiRouter.post('/update-scores', (req, res) => {
  if (Array.isArray(req.body) && req.body.length <= 10) {
    scores = req.body;
    console.log('inside service')
    console.log(scores);
    res.send(scores);
  } else {
    res.status(400).send('Invalid scores data');
  }
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);