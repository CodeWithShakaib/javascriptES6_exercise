/*
The Set object lets you store unique values of any type.
Set objects are collections of values. You can iterate through the elements of a set 
in insertion order. 
->important!
A value in the Set may only occur once; it is unique in the Set's
collection.

Constructor:
Set()
Creates a new Set object.
The constructor function that is used to create derived objects.

Instance properties:

Set.prototype.size:
Returns the number of values in the Set object.

Instance methods:
-----------------
Set.prototype.add(value):
Appends value to the Set object. Returns the Set object.

Set.prototype.clear():
Removes all elements from the Set object.

Set.prototype.delete(value):
Removes the element associated to the value and returns the value that Set.prototype.has(value)
would have previously returned. Set.prototype.has(value) will return false afterwards.

Set.prototype.has(value):
Returns a boolean asserting whether an element is present with the given value in the Set object or not.

Iteration methods:
------------------
Set.prototype[@@iterator]():
Returns a new Iterator object that yields the values for each element in the Set object in 
insertion order.

Set.prototype.keys():
Returns a new Iterator object that yields the values for each element in the Set object in 
insertion order. (For Sets, this is the same as the values() method.)

Set.prototype.values():
Returns a new Iterator object that yields the values for each element in the Set object in 
insertion order. (For Sets, this is the same as the keys() method.)

Set.prototype.entries():
Returns a new Iterator object that contains an array of [value, value] for each element in 
the Set object, in insertion order.

This is similar to the Map object, so that each entry's key is the same as its value for a Set.

Set.prototype.forEach(callbackFn[, thisArg]):
Calls callbackFn once for each value present in the Set object, in insertion order. If a 
thisArg parameter is provided, it will be used as the this value for each invocation of 
callbackFn.
 */

let mySet = new Set()

mySet.add(1);
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);
console.log(mySet); // expected output : {1,2,3,4,5} (because sets only takes unique values)

console.log(mySet.has(1)); //true
console.log(Math.sqrt(25)); //true
console.log(mySet);
mySet.delete(5);
console.log("after deleted '5' : " + mySet);

console.log(mySet.has(1)); //true

// iteration
// foreach
mySet.forEach(function(value) {
    console.log(value)
})

for (let value of mySet) {
    console.log(value);
}

// remove unique entries from array using set
// relation between array() and sets()
let arr = new Array();

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(4);
arr.push(2);
arr.push(3);

console.log(arr);
// these dots will convert array into set into elements
console.log(new Array(...new Set(arr)));