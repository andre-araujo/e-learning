const mongoose = require('mongoose');

const Course = require('../../../models/Course');
const Lesson = require('../../../models/Lesson');

function createLessonController(req, res) {
  const {
    name,
    videoURL,
    moduleName,
    youtubeVideoId,
  } = req.body;

  const {
    courseId,
    lessonId,
  } = req.params;

  if (!req.user.admin) return res.status(403).send({ message: 'Must be an admin' });

  if (lessonId) {
    return Lesson.findByIdAndUpdate(
      lessonId,
      {
        name,
        videoURL,
        moduleName,
        youtubeVideoId,
      },
    )
      .then(lesson => res.send(lesson))
      .catch(err => res.status(500).send({ message: err }));
  }

  return Course
    .findById(courseId)
    .then((course) => {
      if (course) {
        const lesson = new Lesson({
          _id: new mongoose.Types.ObjectId(),
          name,
          videoURL,
          moduleName,
          youtubeVideoId,
        });

        course.lessons.push(lesson);

        lesson.save();
        course.save();
      }

      res.send(course);
    })
    .catch(err => res.status(500).send({ message: err }));
}

module.exports = createLessonController;
