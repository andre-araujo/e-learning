import { createRequestService } from 'redux-create-request';
import fetchHandler from '../../utils/fetchHandler';

async function responseParser(resp) {
  try {
    const jsonBody = await resp.json();

    const parsedResponse = {
      ...jsonBody,
      status: resp.status,
    };

    return parsedResponse;
  } catch (e) {
    throw new Error('fetch error', e);
  }
}

export const getOrigin = req => (req ? `${req.protocol}://${req.get('Host')}` : window.location.origin);

const storeToken = (resp) => {
  window.localStorage.setItem('token', resp.token);
  return resp;
};

export function singUp({
  name,
  email,
  password,
  phone,
}) {
  return fetchHandler(
    '/account/singup',
    {
      method: 'POST',
      body: {
        name,
        email,
        password,
        phone,
      },
    },
  )
    .then(responseParser)
    .then(storeToken);
}

export function getToken({
  email,
  password,
}) {
  return fetchHandler(
    '/account/token',
    {
      method: 'POST',
      body: {
        email,
        password,
      },
    },
  )
    .then(responseParser)
    .then(storeToken);
}

export function getUser() {
  return fetchHandler(
    '/account/me', {
      method: 'GET',
    },
  )
    .then(responseParser);
}

export const joinCourseService = createRequestService({
  type: 'JOIN_COURSE',
  request: courseId => fetchHandler(
    '/account/me/courses', {
      method: 'PUT',
      body: {
        courseId,
      },
    },
  ),
});


export const submitUserActivityService = createRequestService({
  type: 'SUBMIT_USER_ACTIVITY',
  request: ({
    courseId,
    activityId,
    questions,
  }) => fetchHandler(
    `/account/me/courses/${courseId}/activities${activityId ? `/${activityId}` : ''}`, {
      method: 'POST',
      body: {
        questions,
      },
    },
  ),
});

export const createCourseService = createRequestService({
  type: 'CREATE_COURSE',
  request: ({
    name,
    instructorName,
    category,
    keyWords,
    courseId,
  }) => fetchHandler(
    `/courses${courseId ? `/${courseId}` : ''}`, {
      method: 'POST',
      body: {
        name,
        instructorName,
        category,
        keyWords,
      },
    },
  ),
});

export const createLessonService = createRequestService({
  type: 'CREATE_LESSON',
  request: ({
    courseId,
    lessonId,
    name,
    videoURL,
    youtubeVideoId,
    moduleName,
  }) => fetchHandler(
    `/courses/${courseId}/lessons${lessonId ? `/${lessonId}` : ''}`, {
      method: 'POST',
      body: {
        name,
        videoURL,
        youtubeVideoId,
        moduleName,
      },
    },
  ),
});

export const createActivityService = createRequestService({
  type: 'CREATE_ACTIVITY',
  request: ({
    courseId,
    activityId,
    questions,
    moduleName,
    name,
  }) => fetchHandler(
    `/courses/${courseId}/activities${activityId ? `/${activityId}` : ''}`, {
      method: 'POST',
      body: {
        questions,
        moduleName,
        name,
      },
    },
  ),
});

export const getCourseService = createRequestService({
  type: 'GET_COURSE',
  request: () => fetchHandler(
    '/courses', {
      method: 'GET',
    },
  ),
});

export const getCourseDetailService = createRequestService({
  type: 'GET_COURSE_DETAIL',
  request: id => fetchHandler(
    `/courses/${id}`, {
      method: 'GET',
    },
  ),
});
