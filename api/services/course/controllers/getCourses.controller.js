const Course = require('../../../models/Course');

function getCoursesController(req, res) {
  if (req.params.courseId) {
    return Course.findOne({
      _id: req.params.courseId,
    })
      .populate('lessons')
      .populate('activities', !req.user.admin && '-questions.answers.correct')
      .then((data) => {
        res.send(data);
      })
      .catch(err => res.status(500).send({ message: err }));
  }

  return Course.find()
    .sort({ updated_at: 'desc' })
    .populate('subscriptions', 'rating')
    .then((data) => {
      res.send(data);
    })
    .catch(err => res.status(500).send({ message: err }));
}

module.exports = getCoursesController;
