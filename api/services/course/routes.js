const authentication = require('../../middlewares/authentication.middleware');

app.post(
  '/api/courses', authentication,
  require('./controllers/createCourse.controller'),
);

app.post(
  '/api/courses/:courseId', authentication,
  require('./controllers/createCourse.controller'),
);

app.get(
  '/api/courses', authentication,
  require('./controllers/getCourses.controller'),
);

app.get(
  '/api/courses/:courseId', authentication,
  require('./controllers/getCourses.controller'),
);

app.post(
  '/api/courses/:courseId/lessons', authentication,
  require('./controllers/createLesson.controller'),
);

app.post(
  '/api/courses/:courseId/lessons/:lessonId', authentication,
  require('./controllers/createLesson.controller'),
);

app.post(
  '/api/courses/:courseId/activities', authentication,
  require('./controllers/createActivity.controller'),
);

app.post(
  '/api/courses/:courseId/activities/:activityId', authentication,
  require('./controllers/createActivity.controller'),
);

app.post(
  '/api/courses/:courseId/files', authentication,
  require('./controllers/courseFiles.controller').uploadFileController,
);
