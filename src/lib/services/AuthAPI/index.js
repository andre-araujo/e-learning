import fetchHandler from '../../utils/fetchHandler';

export const getOrigin = req => (req ? `${req.protocol}://${req.get('Host')}` : window.location.origin);

export const authenticate = (origin, user) => fetchHandler(`${origin}/api/users/${user}`);
