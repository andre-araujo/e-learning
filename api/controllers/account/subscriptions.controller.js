const CourseSubscription = require('../../models/CourseSubscription');

async function subscriptions(req, res) {
  if (!req.user.admin) return res.status(403).send({ message: 'Must be an admin' });

  try {
    const subscriptionList = await CourseSubscription.find()
      .populate({
        path: 'accountId',
        select: 'name email',
      })
      .populate({
        path: 'courseId',
        select: 'name lessons',
      })
      .populate({
        path: 'finishedLessons.lessonId',
        select: 'name',
      })
      .populate({
        path: 'finishedActivities.activityId',
        select: 'name questions',
      });

    if (!subscriptionList) return res.send(404);

    return res.send(subscriptionList);
  } catch (err) {
    res.status(500).send({ message: err });
  }
}

module.exports = subscriptions;
