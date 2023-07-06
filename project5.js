

// program to count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    let count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
let string = prompt('Enter a string: ');

let result = countVowel(string);

console.log(result);
