/*JavaScript Declarations are Hoiste
------------------------------------
In JavaScript, a variable can be declared after it has been used.

In other words; a variable can be used before it has been declared.
*/

// simple function
function printMe(args) {
    console.log(args);
}

printMe("I am a simple function");

// arrow function
var funcName = () => {
    console.log("I am an arrow function");
}

funcName()

var calPer = (mark1, mark2, tMarks = 200) => { // always give default value at the end in function's parameter 
    return ((mark1 + mark2) / tMarks) * 100;
}

console.log(calPer(80, 80) + '%');