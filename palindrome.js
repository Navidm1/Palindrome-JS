let palindrome = function (word) {
    let len = word.length;
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    // console.log(start, end);
    let flip = end.split('').reverse().join('');
    // return word === word.split('').reverse().join(''); //print the same result.
    return(start === flip);

}




console.log(palindrome('racecar'));
console.log(palindrome('dad'));
console.log(palindrome('monday'));



