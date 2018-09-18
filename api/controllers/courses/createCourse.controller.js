const Course = require('../../models/Course');

function createCourseController(req, res) {
  const {
    category,
    instructorName,
    keyWords,
    name,
  } = req.body;

  const {
    courseId,
  } = req.params;

  if (!req.user.admin) return res.status(403).send({ message: 'Must be an admin' });

  if (courseId) {
    return Course.findByIdAndUpdate(
      courseId,
      {
        $set: {
          category,
          instructorName,
          keyWords,
          name,
          updated_at: new Date(),
        },
      },
    )
      .then(course => res.send(course))
      .catch(err => res.status(500).send({ message: err }));
  }

  const course = new Course({
    category,
    instructorName,
    keyWords,
    name,
    instructorId: req.user.id,
  });

  return course
    .save()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err }));
}

module.exports = createCourseController;
