const range = {
    min: 1016,
    max: 1937
}

let result = null;

let i = range.max;
while(i >= range.min) {
    if ((i % 3 === 0 && i % 7 === 0) && (i % 2 !== 0 && i % 5 !== 0)) {
        result = i;
        break;
    }

    i--;
}

console.log('result', result);
