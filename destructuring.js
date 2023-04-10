const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

const [x, y] = numbers;
console.log(x, y);


const student = {
    name: 'Sakib', 
    age: 32, 
    movies: ['king khang', 'Phatn'],
}

const [firstMovie, scdMovie] = [student.movies];

console.log(firstMovie, scdMovie);

const {name, age} = {name: 'alu', age: 14};
console.log(name, age);