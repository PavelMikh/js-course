const str = '';
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString (str) {
    const numberMatchArr = str.match(/\d+$/);
    const stagingNumber = numberMatchArr ? numberMatchArr[0] : '';
    const firstNumberIndex = stagingNumber ? numberMatchArr.index : -1;
    const textpart = firstNumberIndex >= 0
        ? str.split('').slice(0, firstNumberIndex).join('')
        : str;
    
    let incrementedString = '';
    if (str.length > textpart.length) {
        const firstZerosMatchArr = stagingNumber.match(/0+(?!$)/);
        let firstZeros = firstZerosMatchArr ? firstZerosMatchArr[0] : '';
        const firstZerosLength = firstZeros?.length;
        
        const incrementPart = str.split('').slice(firstNumberIndex + firstZerosLength).join('');
        const incrementPartLengthBeforeIncrement = incrementPart.length;
        const numberForIncrement = parseInt(incrementPart, 10);
        const numberAfterIncrement = numberForIncrement + 1;
        const incrementPartAfterIncrement = numberAfterIncrement.toString();
        const incrementPartLengthAfterIncrement = incrementPartAfterIncrement.length;

        if (incrementPartLengthBeforeIncrement < incrementPartLengthAfterIncrement) {
            firstZeros = firstZeros ? firstZeros.split('').slice(1).join('') : '';
        }
            
        incrementedString = textpart + firstZeros + incrementPartAfterIncrement;
    } else {
        const startNumber = 1;
        incrementedString = str + startNumber.toString();
    }

    return incrementedString;
}

console.log(incrementString(str));

