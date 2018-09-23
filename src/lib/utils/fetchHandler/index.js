import unfetch from 'isomorphic-unfetch';

export const getOrigin = req => (req ? `${req.protocol}://${req.get('Host')}` : window.location.origin);

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
    `http://localhost:3001/api${url}`,
    {
      ...otherOptions,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        ...content,
        ...headers,
      },
      body: body instanceof FormData ? body : JSON.stringify(body),
    },
  );
};

export default fetchHandler;
