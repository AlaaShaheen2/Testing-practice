const countString = require ('./string');

test('takes a string hello an argument and returns its characters count', () => {
    expect(countString('hello')).toBe(5);
});
test('the string should be at least 1 character long and not longer than 10 characters', () => {
    expect(countString('')).toEqual('Error');
  })