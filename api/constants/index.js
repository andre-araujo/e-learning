module.exports = {
  MONGO_URL: 'mongodb://127.0.0.1:27017/elearning',
  APP_PORT: parseInt(process.env.PORT, 10) || 3001,
  SECRET: 'somesecretkey',
  TOKEN_EXPIRATION_TIME: '30d',
  SUCCESS: 'ok',
  NOT_FOUND: 'not found',
  USER_NOT_FOUND: 'user not found',
  INVALID_USER: 'invalid user or password',
  INVALID_TOKEN: 'invalid token',
  EXPIRED_TOKEN: 'token expired',
  UNAUTHORIZED: 'unauthorized',
};
