const bodyParser = require('body-parser');
const passport = require('passport');
const fileUpload = require('express-fileupload');

const { NOT_FOUND } = require('../constants');

const jwtMiddleware = require('../middlewares/passportJWT.middleware');
const authentication = require('../middlewares/authentication.middleware');

passport.use(jwtMiddleware);

app.use(passport.initialize());

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/account/singup', require('../controllers/singup.controller'));
app.post('/api/account/token', require('../controllers/token.controller'));

app.get('/api/account/me', authentication, require('../controllers/account/account.controller'));
app.put('/api/account/me/courses', authentication, require('../controllers/account/subscribeCourse.controller'));
app.get('/api/account/me/courses/:courseId', authentication, require('../controllers/account/getSubscriptions.controller'));
app.post('/api/account/me/courses/:courseId/activities/:activityId', authentication, require('../controllers/account/userActivities.controller'));
app.patch('/api/account/me/courses/:courseId/lessons/:lessonId', authentication, require('../controllers/account/userLessons.controller'));

app.post('/api/account/me/courses/:courseId/rating', authentication, require('../controllers/account/rating.controller'));

app.get('/api/courses/:courseId/certification', authentication, require('../controllers/account/certification.controller'));

app.get('/api/subscriptions', authentication, require('../controllers/account/subscriptions.controller'));

app.post('/api/courses', authentication, require('../controllers/courses/createCourse.controller'));
app.post('/api/courses/:courseId', authentication, require('../controllers/courses/createCourse.controller'));

app.get('/api/courses', authentication, require('../controllers/courses/getCourses.controller'));
app.get('/api/courses/:courseId', authentication, require('../controllers/courses/getCourses.controller'));

app.post('/api/courses/:courseId/lessons', authentication, require('../controllers/courses/createLesson.controller'));
app.post('/api/courses/:courseId/lessons/:lessonId', authentication, require('../controllers/courses/createLesson.controller'));

app.post('/api/courses/:courseId/activities', authentication, require('../controllers/courses/createActivity.controller'));
app.post('/api/courses/:courseId/activities/:activityId', authentication, require('../controllers/courses/createActivity.controller'));

app.post('/api/courses/:courseId/files', authentication, require('../controllers/courses/courseFiles.controller').uploadFileController);

app.all('/api/*', (req, res) => {
  res.status(404).send({
    message: NOT_FOUND,
  });
});
