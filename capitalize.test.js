const capt = require('./capitalize');

test('Take a string and returns that string with the first character capitalized \'alaa\'', () => {
    expect(capt('alaa')).toBe('Alaa');
})