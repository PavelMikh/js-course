console.log(isEqualSymbols('адрес', 'среда')) // true
console.log(isEqualSymbols('ноутбук', 'программист')) // false

function isEqualSymbols(str1, str2) {
    if (str1.length === str2.length) {
        arr1 = str1.split('');
        console.log('arr1', arr1);
        arr2 = str2.split('');
        console.log('arr2', arr2);

        return arr1.every(letter => arr2.includes(letter));
    }
   
    return false;
}