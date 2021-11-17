function isPalindrome(str) {
    const strReverse = str.split('').reverse().join('');

    return str === strReverse;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('programmer'));
