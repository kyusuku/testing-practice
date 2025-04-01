const { createTestScheduler } = require('jest');
const reverseString = require('./reverseString.js');

test('Basic word', () => {
    expect(reverseString('animal')).toBe('lamina');
});

test('Empty string', () => {
    expect(reverseString('')).toBe('');
});

test('Single character', () => {
    expect(reverseString('a')).toBe('a');
});

test('Palindrome', () => {
    expect(reverseString('racecar')).toBe('racecar');
});

test('Multiple words', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('Special characters', () => {
    expect(reverseString('!@#$%^&*()')).toBe(')(*&^%$#@!');
});

test('Numbers', () => {
    expect(reverseString('12345')).toBe('54321');
});

test('Mixed characters', () => {
    expect(reverseString('a1b2c3')).toBe('3c2b1a');
});