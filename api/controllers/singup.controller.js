const { MD5 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const {
  SECRET,
  TOKEN_EXPIRATION_TIME,
  SUCCESS,
  INVALID_USER,
} = require('../constants');

const Account = require('../models/Account');

function createAdmin() {
  const adminData = {
    name: 'admin',
    email: 'admin@admin.com',
    password: MD5('admin').toString(),
    updated_at: new Date(),
    logged_at: new Date(),
    admin: true,
  };

  Account.findOneAndUpdate(
    { email: adminData.email },
    {
      ...adminData,
      $setOnInsert: { created_at: new Date() },
    },
    { new: true, upsert: true },
    (err, admin) => {
      console.info('Admin created!', admin);
    },
  );
}

createAdmin();

function singup(req, res) {
  const {
    phone,
    password,
    ...accountData
  } = req.body;

  if (!req.body.password || !req.body.email) return res.status(400).send({ message: INVALID_USER });

  const account = {
    ...accountData,
    password: MD5(password).toString(),
    phone: Array.isArray(phone) && phone.map(tel => ({
      number: tel.number,
      prefix: tel.prefix,
    })),
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
