import fetchHandler from './index';

global.fetch = jest.fn(() => Promise.resolve({ status: 200 }));

beforeEach(() => {
  global.fetch.mockClear();
});

describe('fetchHandler', () => {
  it('should call fetch with right arguments plus Authorization header', () => {
    fetchHandler('/');

    expect(global.fetch).toHaveBeenCalledWith('/', { headers: { Authorization: 'checked' } });
  });
});
