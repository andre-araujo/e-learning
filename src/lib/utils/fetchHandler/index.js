import unfetch from 'isomorphic-unfetch';

export const getOrigin = req => (req ? `${req.protocol}://${req.get('Host')}` : window.location.origin);

/**
 * Custom fetch
 * @param {String} url
 * @param {Options} options
 */
const fetchHandler = (url, options = {}) => {
  const { headers, body, ...otherOptions } = options;

  return unfetch(
    `http://localhost:3001/api${url}`,
    {
      ...otherOptions,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'checked',
        ...headers,
      },
      body: JSON.stringify(body),
    },
  ).then(resp => resp.json().then(result => ({ ...result, status: resp.status })));
};

export default fetchHandler;
