const authentication = require('../../middlewares/authentication.middleware');

app.put(
  '/api/account/me/courses', authentication,
  require('./controllers/subscribeCourse.controller'),
);

app.get(
  '/api/account/me/courses/:courseId', authentication,
  require('./controllers/getSubscriptions.controller'),
);

app.post(
  '/api/account/me/courses/:courseId/activities/:activityId', authentication,
  require('./controllers/userActivities.controller'),
);

app.patch(
  '/api/account/me/courses/:courseId/lessons/:lessonId', authentication,
  require('./controllers/userLessons.controller'),
);

app.post(
  '/api/account/me/courses/:courseId/rating', authentication,
  require('./controllers/rating.controller'),
);

app.get(
  '/api/courses/:courseId/certification', authentication,
  require('./controllers/certification.controller'),
);

app.get(
  '/api/subscriptions', authentication,
  require('./controllers/subscriptions.controller'),
);
