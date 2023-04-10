
const numbers = [89, 35, 65, 20];


const newNumber = [...numbers]; 
numbers.push(99);
numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(newNumber);
console.log(numbers);

// Create a new array from an older array and odd an element 

const currentNums = [...numbers, 44];
console.log(currentNums);