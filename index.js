const express = require('express');
const MongoDB = require('./database.js');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const authCookieName = 'token';
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

var apiRouter = express.Router();
app.use(`/api`, apiRouter);
app.set('trust proxy', true);

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

// secureApiRouter verifies credentials for endpoints
// var secureApiRouter = express.Router();
// apiRouter.use(secureApiRouter);

// secureApiRouter.use(async (req, res, next) => {
//   authToken = req.cookies[authCookieName];
//   const user = await DB.getUserByToken(authToken);
//   if (user) {
//     next();
//   } else {
//     res.status(401).send({ msg: 'Unauthorized' });
//   }
// });

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetScores
// secureApiRouter.get('/scores', async (req, res) => {
//   const scores = await DB.getHighScores();
//   res.send(scores);
// });

// SubmitScore
// secureApiRouter.post('/score', async (req, res) => {
//   const score = { ...req.body, ip: req.ip };
//   await DB.addScore(score);
//   const scores = await DB.getHighScores();
//   res.send(scores);
// });


// createAuthorization from the given credentials
apiRouter.post('/auth/create', async (req, res) => {
  if (await MongoDB.getUser(req.body.uname)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await MongoDB.createUser(req.body.uname, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

// loginAuthorization from the given credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await MongoDB.getUser(req.body.uname);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// getMe for the currently authenticated user
apiRouter.get('/user/me', async (req, res) => {
  authToken = req.cookies[authCookieName];
  const user = await MongoDB.getUserByToken(authToken);
  if (user) {
    res.send({ uname: user.uname });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await MongoDB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}


// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', {root: 'public'});
  console.log("ran reroute");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
