import moment from 'moment';

export function calculateSumOfNumbers(numbers = []) {
    return numbers.reduce((acc, number) => {
        if (!isNaN(number)) {
            return acc + number;
        }
    }, 0);
}

export function getFormattedTime(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}