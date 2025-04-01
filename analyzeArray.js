function analyzeArray(arr) {
    let avg;
    let min = arr[0];
    let max = arr[0];
    let length = arr.length;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    avg = sum / length;

    let res = {
        average: avg,
        min: min,
        max: max,
        length: length
    }

    return res;
};

module.exports = analyzeArray;