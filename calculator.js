class Calculator {
    constructor() {

    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    divide(a, b) {
        return b === 0 ? 'Undefined' : a / b;
    }

    multiply(a, b) {
        return a * b;
    }
}

module.exports = Calculator;