// -=-=-=-=-=-=-=-=- strings -=-=-=-=-=-=-=-=-
let login = 'My login is "Vlad"?';
let end = "Goodbye!";

console.log("login[3]: ", login[3]); // l 
console.log("Char at 3: ", login.charAt(3)); // l
console.log(login + end);

if (login.endsWith("?")) console.log("Ends with ?");
else console.log("Does not end with ?");

if (login.startsWith("A")) console.log("Starts with A");

console.log("Index of i: ", login.indexOf('i')); // 6, if not exists: -1
console.log("Last Index of i: ", login.lastIndexOf('i')); // 9

if (login.includes("is")) console.log("Includes the word 'is'");

console.log("Symbols: ", login.length);

console.log("After replace: ", login.replace('"', '<'));
console.log("After replace: ", login.replaceAll(" ", "-"));

let welcome = "Hello";
console.log(welcome.repeat(3));
console.log("Hello".repeat(3));

// get substring from {3} index to {8} index
console.log("Slice from 3 to 8: ", login.slice(3, 8));
console.log("Upper case: ", login.toUpperCase());
console.log("Lower case: ", login.toLowerCase());

console.log("Before substring: " + login);
console.log('Substring with 6 symbols from: ', login.substring(login.indexOf('"'), login.lastIndexOf('"') + 1));

let email = prompt("Enter your email:");   // "  example@gmail.com "
console.log(`Trimmed: |${email.trim()}|`); // "example@gmail.com"

let text = "How are you today? And, blabla. Goodbye!";
const words = text.split(" ");
console.log("Words count:", words.length);
console.log("Words: ", words);

console.log("Joined: ", words.join('-'));