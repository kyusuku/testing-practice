const caesarCipher = require('./caesarCipher.js');

test('Alphabets only', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('String with punctuations', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})