const Course = require('../../models/Course');

function createCourseController(req, res) {
  const {
    category,
    instructorName,
    keyWords,
    name,
  } = req.body;

  if (!req.user.admin) return res.status(403).send({ message: 'Must be an admin' });

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
