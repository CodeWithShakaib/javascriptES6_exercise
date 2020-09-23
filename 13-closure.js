/**
 * A closure is the combination of a function bundled together (enclosed) with references 
 * to its surrounding state (the lexical environment). In other words, a closure gives you 
 * access to an outer function’s scope from an inner function. In JavaScript, closures are 
 * created every time a function is created, at function creation time.
 */

// there is a function named 'abc' enclosed by a function 'funcName' but theer is no closure
var funcName = (name) => {
    console.log("My name is " + name + '.');

    function abc() {
        console.log("I am abc function.")
    }
    abc();
}

funcName("Shakaib")

console.log("\ncolsure applies from here\n--------------------------");
// closure is basically referncing a functions scope, like
var funcName = (name) => {
    console.log("My name is " + name + '.');

    function abc() {
        console.log("I am abc function.")
    }
    return abc;
}

var value = funcName("Shakaib");
value()

// here another exemple

function addMe(x) {
    return function newFunc(y) {
        return x + y
    }
}

var value = addMe(4)
console.log(value(5))
    /**
     *  Explaination:
     *      we made a function(closure) named addME(takes an argument), that return another function that takes an argument 
     *  and return an addition of main function and sub function argument.
     *  In main scope, I stored reference of addME function with parameter and at the last line, called value function with parameter. 
     */


// some maps practice 

var orignal = new Map([
    [1, 'one']
]);
orignal.set(2, "two");

orignal.forEach(function(value, key) {
    console.log(orignal.get(key))
});

for (let key of orignal.keys()) {
    console.log(key, "->", orignal.get(key))
}

console.log(orignal)