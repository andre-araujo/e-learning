import fetchHandler from '../../utils/fetchHandler';

export const getOrigin = req => (req ? `${req.protocol}://${req.get('Host')}` : window.location.origin);

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
  );
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
  );
}

export function getUser() {
  return fetchHandler(
    '/account/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    },
  );
}
