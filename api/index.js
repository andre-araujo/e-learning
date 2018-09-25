const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const {
  MONGO_URL,
} = require('./constants');

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

require('./routes');
require('./generateMass');

module.exports = app;
