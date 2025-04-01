const Calculator = require('./calculator.js');

const calculator = new Calculator();

test('Add', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('Subtract', () => {
    expect(calculator.subtract(5, 8)).toBe(-3);
});

test('Divide with normal denominator', () => {
    expect(calculator.divide(5, 10)).toBe(0.5);
});

test('Divide by zero', () => {
    expect(calculator.divide(5, 0)).toBe('Undefined');
});

test('Multiply', () => {
    expect(calculator.multiply(5, 8)).toBe(40);
});