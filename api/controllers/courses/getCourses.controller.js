const Course = require('../../models/Course');

function getCoursesController(req, res) {
  if (req.params.id) {
    return Course.findOne({
      _id: req.params.id,
    })
      .populate('lessons')
      .then((data) => {
        res.send(data);
      })
      .catch(err => res.status(500).send({ message: err }));
  }

  return Course.find()
    .sort({ updated_at: 'desc' })
    .then((data) => {
      res.send(data);
    })
    .catch(err => res.status(500).send({ message: err }));
}

module.exports = getCoursesController;
