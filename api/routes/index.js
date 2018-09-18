const passport = require('passport');
const { NOT_FOUND } = require('../constants');

const jwtMiddleware = require('../middlewares/passportJWT.middleware');
const authentication = require('../middlewares/authentication.middleware');

passport.use(jwtMiddleware);

app.use(passport.initialize());

app.post('/api/account/singup', require('../controllers/singup.controller'));
app.post('/api/account/token', require('../controllers/token.controller'));
app.get('/api/account/me', authentication, require('../controllers/account.controller'));

app.post('/api/courses', authentication, require('../controllers/courses/createCourse.controller'));
app.post('/api/courses/:courseId', authentication, require('../controllers/courses/createCourse.controller'));

app.get('/api/courses', authentication, require('../controllers/courses/getCourses.controller'));
app.get('/api/courses/:courseId', authentication, require('../controllers/courses/getCourses.controller'));

app.post('/api/courses/:courseId/lessons', authentication, require('../controllers/courses/createLesson.controller'));
app.post('/api/courses/:courseId/lessons/:lessonId', authentication, require('../controllers/courses/createLesson.controller'));

app.all('*', (req, res) => {
  res.status(404).send({
    message: NOT_FOUND,
  });
});
