let numbers = [7, 2, 3, 9, 4, 2, 1, 5, 6]

let min = numbers[0];
for (let j of numbers) { // if we use in insted of for element of array will be converted into string
    if (j < min) {
        min = j;
    }
}
console.log(min)