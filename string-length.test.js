const { stringLength, reverseString, Calculator, capitalize } = require('./string-length');

test('returns string length', () => {
    expect(stringLength('Wobbuffet')).toBe(9)
});

test('checks if string length is 0', () => {
    expect(stringLength('')).toBe("Invalid string")
});

test('checks if string length is >10', () => {
    expect(stringLength('Supercalifragilistic')).toBe("Invalid string")
});

test('returns reversed string', () => {
    expect(reverseString('MadamImAdam')).toBe("madAmImadaM")
});

describe ('myCalculator', () => {
    let myCalculator = new Calculator;
    test('add', () => {
        expect(myCalculator.add(1,2)).toBe(3)
    });
    test('add', () => {
        expect(myCalculator.add(0,-5)).toBe(-5)
    });
    test('add', () => {
        expect(myCalculator.add(-1,-2)).toBe(-3)
    });
    test('subtract', () => {
        expect(myCalculator.subtract(2,1)).toBe(1)
    });
    test('subtract', () => {
        expect(myCalculator.subtract(1,2)).toBe(-1)
    });
    test('subtract', () => {
        expect(myCalculator.subtract(-1,-2)).toBe(1)
    });
    test('divide', () => {
        expect(myCalculator.divide(2,1)).toBe(2)
    });
    test('divide', () => {
        expect(myCalculator.divide(1,2)).toBe(0.5)
    });
    test('divide', () => {
        expect(myCalculator.divide(0,1)).toBe(0)
    });
    test('multiply', () => {
        expect(myCalculator.multiply(-1,-2)).toBe(2)
    });
    test('multiply', () => {
        expect(myCalculator.multiply(1,1)).toBe(1)
    });
    test('multiply', () => {
        expect(myCalculator.multiply(1,-1)).toBe(-1)
    });
});

test('capitalizes first letter of string', () => {
    expect(capitalize('lizardon')).toBe('Lizardon')
});