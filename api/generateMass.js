const { MD5 } = require('crypto-js');
const Account = require('./models/Account');

async function generateMass() {
  await Account.findOneAndUpdate(
    { email: 'admin@admin.com' },
    {
      name: 'admin',
      email: 'admin@admin.com',
      password: MD5('admin').toString(),
      updated_at: new Date(),
      logged_at: new Date(),
      admin: true,
      $setOnInsert: { created_at: new Date() },
    },
    { new: true, upsert: true },
  );

  await Account.findOneAndUpdate(
    { email: 'test@test.com' },
    {
      name: 'test',
      email: 'test@test.com',
      password: MD5('test').toString(),
      updated_at: new Date(),
      logged_at: new Date(),
      admin: false,
      $setOnInsert: { created_at: new Date() },
    },
    { new: true, upsert: true },
  );
}

try {
  generateMass();
  console.log('Mass generated');
} catch (e) {
  console.log('Cannot generate mass');
}
