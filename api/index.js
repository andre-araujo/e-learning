const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {
  MONGO_URL,
  APP_PORT,
} = require('./constants');

global.app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(
  MONGO_URL,
  { useNewUrlParser: true },
);

require('./routes/index.js');

app.listen(APP_PORT, () => {
  process.stdout.write(`> Ready on http://localhost:${APP_PORT}\n`);
});
