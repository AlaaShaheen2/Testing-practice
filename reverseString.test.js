const reverseStr = require('./reverseString');

test(' Take this string alaa as an argument and return it reversed', () => {
    expect(reverseStr('alaa')).toBe('aala');
})

test('Take this string Shaheen as an argument and return it reversed', () => {
    expect(reverseStr('Shaheen')).toBe('neehahS');
})