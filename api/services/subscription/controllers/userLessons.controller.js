const CourseSubscription = require('../../../models/CourseSubscription');
const Lesson = require('../../../models/Lesson');

async function userLesson(req, res) {
  const {
    courseId,
    lessonId,
  } = req.params;

  if (req.user.admin) return res.status(403).send({ message: 'Not allowed for admins' });

  if (lessonId) {
    try {
      const accountId = req.user.id;

      const subscription = await CourseSubscription.findOne({
        accountId,
        courseId,
      });

      const lesson = await Lesson.findById(lessonId);

      if (!lesson) return res.status(404).send({ message: 'Lesson does not exist' });

      const LessonAlreadyDone = subscription
        .finishedLessons
        .find(finishedLesson => finishedLesson.lessonId == lessonId); // eslint-disable-line

      if (!LessonAlreadyDone) {
        subscription.finishedLessons.push({
          lessonId,
        });
        subscription.save();
      }

      return res.send(subscription);
    } catch (err) {
      res.status(500).send({ message: err });
    }
  }
  res.status(404).send();
}

module.exports = userLesson;
