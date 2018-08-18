import unfetch from 'isomorphic-unfetch';

export const getOrigin = req => (req ? `${req.protocol}://${req.get('Host')}` : window.location.origin);

class FetchError extends Error {
  constructor(message = 'Undexpected fetch error') {
    super(message);
  }
}

async function responseParser(resp) {
  try {
    const jsonBody = await resp.json();

    const parsedResponse = {
      ...jsonBody,
      status: resp.status,
    };

    return parsedResponse;
  } catch (e) {
    throw new FetchError(e.message);
  }
}

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
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        ...headers,
      },
      body: JSON.stringify(body),
    },
  )
    .then(responseParser);
};

export default fetchHandler;
