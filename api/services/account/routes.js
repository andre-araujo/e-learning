const authentication = require('../../middlewares/authentication.middleware');

app.post(
  '/api/account/singup',
  require('./controllers/singup.controller'),
);

app.post(
  '/api/account/token',
  require('./controllers/token.controller'),
);

app.get(
  '/api/account/me', authentication,
  require('./controllers/account.controller'),
);
