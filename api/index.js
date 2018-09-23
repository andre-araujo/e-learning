const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const {
  MONGO_URL,
  APP_PORT,
} = require('./constants');

global.app = express();

app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
app.use('/', express.static(path.resolve(__dirname, '..', 'dist')));

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

app.listen(APP_PORT, () => {
  process.stdout.write(`> Ready on http://localhost:${APP_PORT}\n`);
});
