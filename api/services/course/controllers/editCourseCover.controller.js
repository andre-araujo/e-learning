const Course = require('../../../models/Course');

async function editCourseCoverController(req, res) {
  const {
    courseId,
  } = req.params;

  const {
    imageURL,
  } = req.body;

  if (!req.user.admin) return res.status(403).send({ message: 'Must be an admin' });

  if (!courseId || !imageURL) return res.status(400).send({ message: 'Missing courseId or imageURL' });

  try {
    const course = await Course.findByIdAndUpdate(
      courseId,
      {
        $set: {
          imageURL,
          updated_at: new Date(),
        },
      },
      { new: true },
    )
      .populate('lessons')
      .populate('activities');

    res.send(course);
  } catch (e) {
    res.status(500);
  }
}

module.exports = editCourseCoverController;
