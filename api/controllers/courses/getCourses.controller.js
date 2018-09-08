const Course = require('../../models/Course');

function getCoursesController(req, res) {
  return Course.find()
    .then((data) => {
      res.send(data);
    })
    .catch(err => res.status(500).send({ message: err }));
}

module.exports = getCoursesController;
