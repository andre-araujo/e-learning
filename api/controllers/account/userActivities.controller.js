const CourseSubscription = require('../../models/CourseSubscription');
const Activity = require('../../models/Activity');

async function userActivities(req, res) {
  const {
    questions,
  } = req.body;

  const {
    courseId,
    activityId,
  } = req.params;

  if (req.user.admin) return res.status(403).send({ message: 'Not allowed for admins' });

  if (activityId) {
    try {
      const accountId = req.user.id;

      const subscription = await CourseSubscription.findOne({
        accountId,
        courseId,
      });

      const activity = await Activity.findById(activityId);

      /*
        TODO: change data structure to improve performance
        question = {
          answers: [],
          correct: index
        }
      */
      const correctAnswers = activity.questions.reduce((acc, question, i) => {
        let incorrect = false;

        question.answers.forEach((answer, j) => {
          if (questions[i].answers[j].correct !== answer.correct) incorrect = true;
        });

        if (!incorrect) return acc + 1;

        return acc;
      }, 0);

      const activityAlreadyDone = subscription
        .finishedActivities
        .find(finishedActivity => finishedActivity.activityId == activityId); // eslint-disable-line

      if (activityAlreadyDone) {
        activityAlreadyDone.correctAnswers = correctAnswers;
      } else {
        subscription.finishedActivities.push({
          activityId,
          correctAnswers,
        });
      }

      subscription.save();

      return res.send({ correctAnswers });
    } catch (err) {
      res.status(500).send({ message: err });
    }
  }
  res.status(404).send();
}

module.exports = userActivities;
