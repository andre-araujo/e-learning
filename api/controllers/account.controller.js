const {
  SUCCESS,
  USER_NOT_FOUND,
} = require('../constants');

const Account = require('../models/Account');

function accountController(req, res) {
  return Account.findOne(
    {
      _id: req.user.id,
    },
    (err, account) => {
      if (err) {
        return res.status(500).send({ message: err });
      }

      if (!account) {
        return res.status(404).send({ message: USER_NOT_FOUND });
      }

      const {
        password,
        ...accountResult
      } = account.toObject();

      return res.send({
        message: SUCCESS,
        account: accountResult,
      });
    },
  );
}

module.exports = accountController;
