const { MD5 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const {
  SECRET,
  TOKEN_EXPIRATION_TIME,
  SUCCESS,
  INVALID_USER,
} = require('../../../constants');

const Account = require('../../../models/Account');

function tokenController(req, res) {
  const {
    email,
    password,
  } = req.body;

  if (!req.body.password || !req.body.email) return res.status(400).send({ message: INVALID_USER });

  return Account.findOneAndUpdate(
    {
      $or: [{ email }, { name: email }],
      password: MD5(password).toString(),
    },
    { $set: { logged_at: new Date() } },
    (err, account) => {
      if (err) {
        return res.status(500).send({ message: err });
      }

      if (account) {
        const payload = { id: account.id, admin: account.admin };
        const token = jwt.sign(payload, SECRET, { expiresIn: TOKEN_EXPIRATION_TIME });

        return res.send({
          message: SUCCESS,
          token,
        });
      }
      return res.status(401).send({
        message: INVALID_USER,
      });
    },
  );
}

module.exports = tokenController;
