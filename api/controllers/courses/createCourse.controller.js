const {
  SUCCESS,
} = require('../../constants');

const Course = require('../../models/Course');

function createCourseController(req, res) {
  const {
    category,
    instructorName,
    keyWords,
    name,
  } = req.body;

  const course = new Course({
    category,
    instructorName,
    keyWords,
    name,
    instructorId: req.user.id,
  });

  course
    .save()
    .then(createdCourse => res.send({
      message: SUCCESS,
      body: createdCourse,
    }))
    .catch(err => res.status(500).send({ message: err }));
}

module.exports = createCourseController;
