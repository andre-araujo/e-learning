const PDFDocument = require('pdfkit');
const CourseSubscription = require('../../models/CourseSubscription');

function parseCourseResults(subscription) {
  const completion = subscription.finishedLessons.length
      / subscription.courseId.lessons.length * 100;

  const activitiesResults = subscription.finishedActivities.reduce((acc, finishedActivity) => (
    finishedActivity.correctAnswers
        / finishedActivity.activityId.questions.length * 100
  ) + acc,
  0) / subscription.finishedActivities.length;

  return { completion, activitiesResults };
}

async function getCertification(req, res) {
  const {
    courseId,
  } = req.params;

  if (req.user.admin) return res.status(403).send({ message: 'Not allowed for admins' });

  try {
    const accountId = req.user.id;

    const subscription = await CourseSubscription.findOne({
      courseId,
      accountId,
    })
      .populate({
        path: 'accountId',
        select: 'name email',
      })
      .populate({
        path: 'courseId',
        select: 'name lessons',
      })
      .populate({
        path: 'finishedLessons.lessonId',
        select: 'name',
      })
      .populate({
        path: 'finishedActivities.activityId',
        select: 'name questions',
      });

    if (!subscription) return res.send(404);

    const courseResults = parseCourseResults(subscription);

    if (courseResults.completion < 100 || courseResults.activitiesResults < 70) {
      return res.send(courseResults);
    }

    let filename = 'certificado';

    const doc = new PDFDocument();

    filename = `${encodeURIComponent(filename)}.pdf`;

    res.setHeader('Content-disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-type', 'application/pdf');

    const content = `
      LearningShelf
      Certificado do curso: ${subscription.courseId.name}
      Aluno: ${subscription.accountId.name}
    `;

    doc.y = 300;

    doc.text(content, 50, 50);
    doc.pipe(res);
    doc.end();
  } catch (err) {
    res.status(500).send({ message: err });
  }
}

module.exports = getCertification;
