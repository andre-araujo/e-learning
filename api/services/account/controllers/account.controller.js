const {
  SUCCESS,
  USER_NOT_FOUND,
} = require('../../../constants');

const Account = require('../../../models/Account');

async function accountController(req, res) {
  try {
    const account = await Account.findById(req.user.id).populate('subscriptions');

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
  } catch (err) {
    return res.status(500).send({ message: err });
  }
}

module.exports = accountController;
