const { MD5 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const {
  SECRET,
  TOKEN_EXPIRATION_TIME,
  SUCCESS,
  INVALID_USER,
} = require('../constants');

const Account = require('../models/Account');

function singup(req, res) {
  const {
    password,
    ...accountData
  } = req.body;

  if (!req.body.password || !req.body.email) return res.status(400).send({ message: INVALID_USER });

  const account = {
    ...accountData,
    password: MD5(password).toString(),
    updated_at: new Date(),
    logged_at: new Date(),
    admin: false,
  };

  return Account.findOneAndUpdate(
    { email: accountData.email },
    {
      ...account,
      $setOnInsert: { created_at: new Date() },
    },
    { new: true, upsert: true },
    (err, updatedAccount) => {
      if (err) {
        return res.status(500).send({ message: err });
      }

      const payload = { id: updatedAccount.id };
      const token = jwt.sign(payload, SECRET, { expiresIn: TOKEN_EXPIRATION_TIME });

      const {
        password, // eslint-disable-line
        ...updatedAccountResult
      } = updatedAccount.toObject();

      return res.send({
        message: SUCCESS,
        token,
        account: updatedAccountResult,
      });
    },
  );
}

module.exports = singup;
