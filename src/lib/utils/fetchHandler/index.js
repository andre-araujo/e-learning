import unfetch from 'isomorphic-unfetch';

export const getOrigin = req => (req ? `${req.protocol}://${req.get('Host')}` : window.location.origin);

/**
 * Custom fetch
 * @param {String} url
 * @param {Options} options
 */
const fetchHandler = (url, options = {}) => {
  const { headers, otherOptions } = options;

  return unfetch(
    `http://localhost:3001${url}`,
    {
      ...otherOptions,
      headers: {
        Authorization: 'checked',
        ...headers,
      },
    },
  );
};

export default fetchHandler;
