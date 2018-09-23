const Course = require('../../models/Course');

async function uploadFileController(req, res) {
  const {
    courseId,
  } = req.params;

  if (!req.user.admin) return res.status(403).send({ message: 'Must be an admin' });

  if (!req.files) return res.status(400);
  const { courseFile } = req.files;

  const course = await Course
    .findById(courseId)
    .populate('lessons')
    .populate('activities');

  if (!course) return res.status(404);

  const alreadyUploaded = course
    .files
    .find(file => file.url === courseFile.url);

  if (alreadyUploaded) return res.status(400);


  return courseFile.mv(`${__dirname}/../../uploads/${courseFile.name}`, (err) => {
    if (err) { return res.status(500).send(err); }

    course.files.push({
      url: `/uploads/${courseFile.name}`,
      name: courseFile.name,
    });

    course.save();

    res.send(course);
  });
}

module.exports.uploadFileController = uploadFileController;
