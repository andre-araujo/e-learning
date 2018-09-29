const CourseSubscription = require('../../../models/CourseSubscription');

async function ratingController(req, res) {
  const {
    rating,
  } = req.body;

  const {
    courseId,
  } = req.params;

  try {
    if (req.user.admin) return res.status(403).send({ message: 'Not allowed for admins' });

    const accountId = req.user.id;

    const subscription = await CourseSubscription.findOne({
      accountId,
      courseId,
    });

    const parserRating = parseInt(rating, 10);

    subscription.rating = parserRating > 5 ? 5 : parserRating;
    subscription.save();

    res.send(subscription);
  } catch (err) {
    return res.status(500).send({ message: err });
  }
}

module.exports = ratingController;
