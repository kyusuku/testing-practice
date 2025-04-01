const capitalize = require('./capitalize.js');

test('All lower case letters', () => {
    expect(capitalize('animal')).toBe('Animal');
});

test('All letters capitalized', () => {
    expect(capitalize('ANIMAL')).toBe('Animal');
});

test('Mixture of capitalized and lower case letters', () => {
    expect(capitalize('aNImaL')).toBe('Animal');
});

test('A string with spaces', () => {
    expect(capitalize('animal and farm')).toBe('Animal and farm');
});

test('A string with spaces with a mixture of upper and lower case letters', () => {
    expect(capitalize('aNImAL aNd FARM')).toBe('Animal and farm');
});
