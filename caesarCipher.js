function caesarCipher(string, shiftFactor) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];

    for (let i = 0; i < string.length; i++) {
        if (alphabet.includes(string[i].toLowerCase())) {
            if (string[i] === string[i].toUpperCase()) {
                result.push(alphabet[(alphabet.indexOf(string[i].toLowerCase()) + shiftFactor) % 26].toUpperCase());
            } else {
                result.push(alphabet[(alphabet.indexOf(string[i]) + shiftFactor) % 26]);
            }
        } else {
            result.push(string[i]);
        }
    }

    return result.join('');
}

module.exports = caesarCipher;