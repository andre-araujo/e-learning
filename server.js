const express = require('express');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';

const {
  APP_PORT,
} = require('./api/constants');

if (dev) {
  const next = require('next');
  const nextApp = next({
    dev,
    dir: './src',
    conf: require('./next.config.js'),
  });
  const handle = nextApp.getRequestHandler();

  nextApp.prepare()
    .then(() => {
      const server = require('./api');

      server.get('*', (req, res) => handle(req, res));

      server.listen(APP_PORT, (err) => {
        if (err) throw err;
        process.stdout.write(`> Ready on http://localhost:${APP_PORT}\n`);
      });
    });
} else {
  const server = require('./api');

  server.use('/', express.static(path.resolve(__dirname, 'dist')));

  server.listen(APP_PORT, (err) => {
    if (err) throw err;
    process.stdout.write(`> Ready on http://localhost:${APP_PORT}\n`);
  });
}
