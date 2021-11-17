const range = {
    min: 1016,
    max: 1937
}

const filteredNumbers = [];

let i = range.min;
while(i <= range.max) {
    if ((i % 3 === 0 && i % 7 === 0) && (i % 2 !== 0 && i % 5 !== 0)) {
        filteredNumbers.push(i);
    }

    i++;
}

filteredNumbers.sort((a, b) => b - a);

const result = filteredNumbers[0];

console.log('result', result);
