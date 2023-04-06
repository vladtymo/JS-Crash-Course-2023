// ------------ cycles ------------
// types: for, while, do while, for in, for of

console.log("1: Message!");
console.log("2: Message!");
console.log("3: Message!");

// while - cycle with pre-condition

let counter = 0;
while (counter < 10) {
    console.log("One more cycle iteration invoke!");
    ++counter;
    // repear code until the condition is true
}

// the same with for cycle
for (let counter = 0; counter < 10; ++counter) {

    console.log("One more cycle iteration invoke!");
}

// task: ask user to input a password and validate the length
let password = prompt("Enter a password:");

while (password.length <= 6) {
    console.warn("Passwork too short. Please input more then 6 characters!");
    password = prompt("Enter a password:");
}

// use do while cycle
do {
    password = prompt("Enter a password:");

    if (password.length <= 6)
        console.warn("Passwork too short. Please input more then 6 characters!");

} while (password.length <= 6);