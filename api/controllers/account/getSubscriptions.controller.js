const CourseSubscription = require('../../models/CourseSubscription');

async function getSubscriptions(req, res) {
  const {
    courseId,
  } = req.params;

  if (req.user.admin) return res.status(403).send({ message: 'Not allowed for admins' });

  if (courseId) {
    try {
      const accountId = req.user.id;

      const subscription = await CourseSubscription.findOne({
        accountId,
        courseId,
      });

      return res.send(subscription);
    } catch (err) {
      res.status(500).send({ message: err });
    }
  }
  res.status(404).send();
}

module.exports = getSubscriptions;
