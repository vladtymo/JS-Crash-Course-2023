// -------- data types --------
let price = 123.5;              // number
let email = 'blabla@ukr.net';   // string
let isValid = true;             // boolean
let emptyObj = null;            // null
let undefinedVar = undefined;   // undefined

console.log("Type of price: " + typeof (price));
console.log("Type of email: " + typeof (email));
console.log("Type of isValid: " + typeof (isValid));
console.log("Type of emptyObj: " + typeof (emptyObj));
console.log("Type of undefinedVar: " + typeof (undefinedVar));

// -------- browser dialogs --------
alert("Some alert message!");

const username = prompt('Enter your name:');

// interpolaiton: `text ${expresion} text`
console.log(`Hello, dear ${username}!`);

// -------- operators --------
// ariphmetic: + - * / %

// operator +{string data} - convert string to number
const side = +prompt("Enter square side:");

console.log(`Increment: ${side + 1}`);
console.log(`Area of the square: ${side * side}`);
