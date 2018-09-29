const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const fileUpload = require('express-fileupload');

const {
  MONGO_URL,
  NOT_FOUND,
} = require('./constants');

const jwtMiddleware = require('./middlewares/passportJWT.middleware');

global.app = express();

app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  return next();
});

mongoose.Promise = global.Promise;

mongoose.connect(
  MONGO_URL,
  { useNewUrlParser: true },
);

passport.use(jwtMiddleware);

app.use(passport.initialize());

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./services/account/routes');
require('./services/course/routes');
require('./services/subscription/routes');

app.all('/api/*', (req, res) => {
  res.status(404).send({
    message: NOT_FOUND,
  });
});

require('./generateMass');

module.exports = app;
