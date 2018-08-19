const {
  SUCCESS,
} = require('../../constants');

const Course = require('../../models/Course');

function getCoursesController(req, res) {
  return Course.find()
    .then(courses => res.send({
      message: SUCCESS,
      courses,
    }))
    .catch(err => res.status(500).send({ message: err }));
}

module.exports = getCoursesController;
