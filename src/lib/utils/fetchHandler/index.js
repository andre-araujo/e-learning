import unfetch from 'isomorphic-unfetch';

const getToken = () => {
  const { getState } = require('../../stateManager/store').store;
  const { token } = getState().authentication;

  return token ? `Bearer ${token}` : null;
};

/**
 * Custom fetch
 * @param {String} url
 * @param {Options} options
 */
const fetchHandler = (url, options = {}) => {
  const { headers, body, ...otherOptions } = options;

  const isFormData = body instanceof FormData;

  const content = {};

  if (!isFormData) {
    content['Content-Type'] = 'application/json';
  }

  return unfetch(
    `/api${url}`,
    {
      ...otherOptions,
      headers: {
        Authorization: getToken(),
        ...content,
        ...headers,
      },
      body: body instanceof FormData ? body : JSON.stringify(body),
    },
  );
};

export default fetchHandler;
