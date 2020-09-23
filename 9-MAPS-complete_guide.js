/* 
1- The Map object holds key-value pairs and remembers the original insertion order of
the keys. Any value (both objects and primitive values) may be used as either a key or a value.
2- The Map object holds key-value pairs and remembers the original insertion order of the keys.
Any value (both objects and primitive values) may be used as either a key or a value.

Object vs Map:
Object is similar to Map—both let you set keys to values, retrieve those values, delete keys,
and detect whether something is stored at a key. For this reason (and because there were no
built-in alternatives), Objects have been used as Maps historically.

A Map does not contain any keys by default. It only contains what is explicitly put into it.	
                                           where as
An Object has a prototype, so it contains default keys that could collide with your own
keys if you're not careful.

Instance methods:
Map.prototype.clear():
Removes all key-value pairs from the Map object.
Map.prototype.delete(key):
Returns true if an element in the Map object existed and has been removed, or false if the
element does not exist. Map.prototype.has(key) will return false afterwards.
Map.prototype.get(key):
Returns the value associated to the key, or undefined if there is none.
Map.prototype.has(key):
Returns a boolean asserting whether a value has been associated to the key in the Map 
object or not.
Map.prototype.set(key, value):
Sets the value for the key in the Map object. Returns the Map object.

Iteration methods:
Map.prototype[@@iterator]():
Returns a new Iterator object that contains an array of [key, value] for each element in 
the Map object in insertion order.

Map.prototype.keys():
Returns a new Iterator object that contains the keys for each element in the Map object in 
insertion order.

Map.prototype.values():
Returns a new Iterator object that contains the values for each element in the Map object in 
insertion order.

Map.prototype.entries():
Returns a new Iterator object that contains an array of [key, value] for each element in the 
Map object in insertion order.

Map.prototype.forEach(callbackFn[, thisArg]):
Calls callbackFn once for each key-value pair present in the Map object, in insertion order. 
If a thisArg parameter is provided to forEach, it will be used as the this value for each 
callback.
*/

// these are objects not maps
let swift = {
    companyName: "Suzuki",
    price: "12 lac",
    seats: 7
};

let passo = {
    companyName: "Toyota",
    price: "",
    seats: 7
};

// now I map these objects
let cars = new Map();
cars.set('swift', swift);
cars.set('passo', passo);

// now get values from the mapped object
console.log(cars.get('swift'));
// checks weather map has specific object or not
console.log(cars.has('swift')); //true

console.log(cars.size);

//let make a new map
let contacts = new Map();
contacts.set("Shakaib", { phone: '0335-6311182', city: 'Rawalpindi' });
contacts.set("Sohaib", { phone: '0315-5105427', city: 'Islamabad' });
contacts.set("Tayyab", { phone: '0301-5093424', city: 'Islamabad' });
contacts.set("Papa", { phone: '0321-5872669', city: 'Rawalpindi' });
contacts.set("Mama", { phone: '0321-5028425', city: 'Rawalpindi' });
console.log(contacts);
console.log(contacts.has('Shakaib'));
console.log(contacts.get("Tayyab"));
console.log(contacts.delete("Tayyab"));
console.log(contacts.has("Tayyab")); //false
// contacts.clear();
// console.log(contacts);

// how can we iterate through the keys or values in the Map
for (let key of contacts.keys()) {
    console.log(key)
}

for (let value of contacts.values()) {
    console.log(value)
}

for (let [key, value] of contacts) {
    console.log(key, " -> ", value)
}
console.log("\n");
for (let entry of contacts.entries()) {
    console.log(entry)
}

// Cloning and merging Maps
// Just like Arrays, Maps can be cloned:

let original = new Map([
    [1, 'one']
])

let clone = new Map(original)

console.log(clone.get(1)) // one
console.log(original === clone) // false (useful for shallow comparison)

// foreach method
function logMapElements(value, key, map) {
    console.log(`map[${key}] = ${value.phone + "  " + value.city}`);
}
contacts.forEach(logMapElements);