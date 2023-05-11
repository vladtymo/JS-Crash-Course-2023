// ------- working with RegEx

// create RegEx
//let regex = new RegExp('[A-Z][a-z]+\!*');
var regex = /[A-Z][a-z]+\!*/;

// methods

let text = prompt("Enter some text:");

console.log('exec():', regex.exec(text));
console.log('test():', regex.test(text));

// flags: 
//      g - global
//      i - case insansative
//      m - multiline

var regex = /\w+[.,!?]/g

console.log('relpace():', text.replace(regex, "..."));
