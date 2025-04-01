const analyzeArray = require('./analyzeArray.js');

test('All positive integers', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
         }
    );
});

test('All negative integers', () => {
    expect(analyzeArray([-1,-8,-3,-4,-2,-6])).toEqual(
        {
            average: -4,
            min: -8,
            max: -1,
            length: 6
         }
    );
});

test('All positive and negative integers', () => {
    expect(analyzeArray([-1,8,-3,4,-2,6])).toEqual(
        {
            average: 2,
            min: -3,
            max: 8,
            length: 6
         }
    );
});

test('All positive and negative integers with zero', () => {
    expect(analyzeArray([-1,0,-3,4,-2,6])).toEqual(
        {
            average: 0.6666666666666666,
            min: -3,
            max: 6,
            length: 6
         }
    );
});