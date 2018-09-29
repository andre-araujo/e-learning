import deepSelect from './index';

const obj = {
  something: {
    another: '1234',
  },
};

describe('deepSelect', () => {
  it('should return "another" value', () => {
    expect(deepSelect(obj, 'something.another')).toEqual('1234');
  });

  it('should return undefined', () => {
    expect(deepSelect(obj, 'something.anothers')).toEqual(undefined);
  });
});
