const calc = require('./calculator');

describe('The function', () => {
    test('is add', () => {
        expect(calc.add(2,1)).toBe(3);
    })
    test('is sub', () => {
        expect(calc.sub(6,1)).toBe(5);
    })
    test('is div', () => {
        expect(calc.div(10,5)).toBe(2);
    })
    test('is mult', () => {
        expect(calc.mult(3,4)).toBe(12);
    })
})