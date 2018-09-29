const mongoose = require('mongoose');

const Course = require('../../../models/Course');
const Activity = require('../../../models/Activity');

function createActivityController(req, res) {
  const {
    name,
    questions,
    moduleName,
  } = req.body;

  const {
    courseId,
    activityId,
  } = req.params;

  if (!req.user.admin) return res.status(403).send({ message: 'Must be an admin' });

  if (activityId) {
    return Activity.findByIdAndUpdate(
      activityId,
      {
        name,
        questions,
        moduleName,
      },
    )
      .then(activity => res.send(activity))
      .catch(err => res.status(500).send({ message: err }));
  }

  return Course
    .findById(courseId)
    .then((course) => {
      if (course) {
        const activity = new Activity({
          id: new mongoose.Types.ObjectId(),
          name,
          questions,
          moduleName,
        });

        course.activities.push(activity);

        activity.save();
        course.save();
      }

      res.send(course);
    })
    .catch(err => res.status(500).send({ message: err }));
}

module.exports = createActivityController;
