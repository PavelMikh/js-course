const str = 'foo00010';
const matchArr = str.match(/\d+$/);
console.log('matchArr', matchArr);

const number = matchArr ? matchArr[0] : null;
console.log('number', number);

const firstNumberIndex = number ? matchArr.index : -1;
console.log('firstNumberIndex', firstNumberIndex);

const textpart = firstNumberIndex >= 0
      ? str.split('').slice(0, firstNumberIndex).join('')
      : '';

console.log('textpart', textpart);

const matchArr2 = number.match(/0+(?!$)/);

const zeros = matchArr2 ? matchArr2[0] : null;

console.log('zeros length', zeros?.length);  

// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString (strng) {
    const numberMatchArr = str.match(/\d+$/);
    const stagingNumber = numberMatchArr ? numberMatchArr[0] : null;
    const firstNumberIndex = stagingNumber ? numberMatchArr.index : -1;
    const stagingNumberLength = stagingNumber?.length;
    const textpart = firstNumberIndex >= 0
        ? str.split('').slice(0, firstNumberIndex).join('')
        : '';
    const firstZerosMatchArr = stagingNumber.match(/0+(?!$)/);
    const firstZeros = firstZerosMatchArr ? firstZerosMatchArr[0] : null;
    const firstZerosLength = firstZeros?.length;
    
    const incrementedPart 
    
    return incrementedString;
  }
