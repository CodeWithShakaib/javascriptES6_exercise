// let keyword
if (true) {
    let name = "Shakaib";
}
// console.log(name) // ReferenceError: name is not defined

// var keyword
if (true) {
    var name = "Shakaib";
}
console.log(name + ' Hassan')

/*
Difference between var and let in JavaScript. var and let are both used for variable 
declaration in javascript but the difference between them is that var is function
scoped and let is block scoped. It can be said that a variable declared with var is 
defined throughout the program as compared to let.
*/

// const keyword

const fullName = "Shakaib";


// fullName = "Shakaib Hassan" // TypeError: Assignment to constant variable.
console.log(fullName);

let myName = fullName;

myName = myName + " 988";
console.log(myName)
console.log(fullName);

// the values in the arrays and objects can be changed even it is a constant in javascript.
// never use a variable before declaring it.
// we should declare a variable first then use it(it's a good practice).