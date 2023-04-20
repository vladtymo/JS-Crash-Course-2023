// ------------ let const

// var disadvantges
console.log(number); // undefined
var number = 10;
var number = 11;     // recreate

if (5 > 1) {
    var message = 'It is an inner variable.'; // global scope
}

console.log(message);

// let advantages
//console.log(koef);     // error
let koef = 10.1;
//let koef = 11.4;       // error

if (5 > 1) {
    let greeting = 'It is an inner variable.'; // global scope
}

//console.log(greeting); // error

// ------------- destructuring
// with objects
const order = {
    id: 1004,
    date: new Date(2023, 1, 22),
    price: 4596.4,
    client: 'Vlad Tymo'
};

// let id = order.id;
// let client = order.client;
let { id, client } = order;

console.log("ID:", id);
console.log("Client:", client);

// with arrays
const arr = [1, 4, 6, 2, 6, 2];

let [first, , third] = arr;

console.log("First item:", first);
console.log("Third item:", third);

// with func parameters
function showOrderClient(/*order*/{ id, client }) {

    console.log(`Client of the order [${/*order.*/id}]: ${/*order.*/client}`);
}

showOrderClient(order);

// ----------- default parameter values
function summ(a = 1, b = 1) {
    console.log("Result =", a + b);
}

summ(6); // 7

// ------------- spread operator
// syntax: ...object

let prices = [44.1, 80.5]; // x, y
summ(...prices);

function showColors(type, ...colors) {
    console.log(`We have ${colors.length} colors of type: ${type}`);
    console.log("Colors:", colors);
}

showColors("rainbow", "red", "orange", "yellow", "green"); // Red, orange, yellow, green, blue, indigo, violet

// add: 55.2, 120
let totalPrices = [...prices, 55.2, 120];
console.log("Total prices:", totalPrices);

// ------------- arrow functions

// 1 - using function declaration
function isEven(x) {
    return x % 2 == 0;
}
var result = prices.filter(isEven);
// 2 - using function expression
var result = prices.filter(function (x) { return x % 2 == 0; });
// 3 - using arrow function
var result = prices.filter((x) => x % 2 == 0); // we can avoid {} if func has only one instruction