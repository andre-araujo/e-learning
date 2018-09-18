const Course = require('../../models/Course');
const Account = require('../../models/Account');

async function joinCourseController(req, res) {
  const {
    courseId,
  } = req.params;

  if (req.user.admin) return res.status(403).send({ message: 'Not allowed for admins' });

  if (courseId) {
    try {
      const account = await Account.findById(req.user.id);
      const course = await Course.findById(courseId);

      if (!account || !course) return res.status(404);

      if (course.students.indexOf(req.user.id) !== -1) throw new Error('Already joined');

      account.courses.push(course);
      course.students.push(account);

      account.save();
      course.save();

      res.send({ created: true });
    } catch (err) {
      res.status(500).send({ message: err });
    }
  }
}

module.exports = joinCourseController;
