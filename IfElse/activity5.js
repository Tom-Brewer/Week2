// Activity 5

let num = 1001;
let numString = num.toString(); 
let reverseNumString = numString.split('').reverse().join('');

if (num == reverseNumString){
    console.log(`${num} is a palindrome`)
} else {
    console.log(`${num} is not a palindrome`)
}