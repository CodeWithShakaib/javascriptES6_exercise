let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function print(...number) {
    console.log(number)
}

print(10, 20, 30, 40) // these dots can convert arguments in to an array and vice versa.

// console.log(Math.max(numbers)) // give us a NaN output 

console.log(Math.max(...numbers)); // this Math.max() function will get numbers in the form of arguments insted of an array.