const mongoose = require('mongoose');

const Account = require('../../../models/Account');
const Course = require('../../../models/Course');
const CourseSubscription = require('../../../models/CourseSubscription');

async function subscribeCourse(req, res) {
  const {
    courseId,
  } = req.body;

  if (req.user.admin) return res.status(403).send({ message: 'Not allowed for admins' });

  if (courseId) {
    try {
      const accountId = req.user.id;

      const subscriptionMade = await CourseSubscription.findOne({
        accountId,
        courseId,
      });

      if (subscriptionMade) throw new Error('Already joined');

      const account = await Account.findById(req.user.id);
      const course = await Course.findById(courseId);

      if (!account || !course) return res.status(404);

      const subscription = new CourseSubscription({
        _id: new mongoose.Types.ObjectId(),
        accountId: req.user.id,
        courseId,
      });

      account.subscriptions.push(subscription);
      course.subscriptions.push(subscription);

      subscription.save();
      account.save();
      course.save();

      res.send(subscription);
    } catch (err) {
      res.status(500).send({ message: err });
    }
  }
  res.status(404).send();
}

module.exports = subscribeCourse;
