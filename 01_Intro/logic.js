// ------------ logic operators ------------
// login operators:       > < == != >= <=
// condition combinators: && (logic and) || (login or)

// type comparison:
// == !=   — loose equality
// === !== — strict equality

console.log("1" == 1); // true
console.log("1" === 1); // false

console.log(5 > 7); // false
console.log("Vlad" != "Nazar"); // true

// ------------ if statement ------------
const number = +prompt("Enter your number:");

if (number < 0) {
    console.warn("Number cannot be negative!");
}
else {
    console.log("Number is correct!");
}

if ("Julia" > "Bob")
    console.log("Bob");
else
    console.log("Julia");

// check number for the range [10...20]
if (number >= 10 && number <= 20) {
    console.log("Your number is in the range [10...20]");
}
else console.warn("Your number is out of the range [10...20]");

// ------------ ternary operator ------------
// template: (condition ? expression_if_true : expression_if_false)

console.log("Bob" < "Julia" ? "First at the top" : "Second at the top");
console.log(`Number is ${number < 0 ? 'incorrect' : 'correct'}!`);

// ------------ switch ------------
const weekday = +prompt("Enter current weekday number:");

// if (weekday == 1) console.log("Today is Monday!");
// if (weekday == 2) console.log("Today is Tuesday!");
// if (weekday == 3) console.log("Today is Wednesday!");
//...
switch (weekday) {
    case 1: console.log("Today is Monday!"); break;
    case 2: console.log("Today is Tuesday!"); break;
    case 3: console.log("Today is Wednesday!"); break;
    case 4: console.log("Today is Thursday!"); break;
    case 5: console.log("Today is Friday!"); break;
    case 6: console.log("Today is Saturday!"); break;
    case 7: console.log("Today is Sunday!"); break;
    default: console.log("Incorrect weekday number!");
}

// using switch with conditions
switch (true) {
    case 4 > 2:
        break;
    case "1" === 1:
        break;
    default:
        break;
}