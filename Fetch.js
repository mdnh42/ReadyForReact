
// 1. JSON 
const student = {
    name: 'Sakib', 
    age: 32, 
    movies: ['king khang', 'Phatn'],
}


const stduentJSON = JSON.stringify(student); 
// console.log(student);
// console.log(stduentJSON);

const studentObj = JSON.parse(stduentJSON); 

// console.log(studentObj);

// 2. FETCH 

// fetch('url')
// .then(res => res.JSON())
// .then(data => console.log(data));


// 3. Keys valus 

const keys = Object.keys(student);

console.log(keys);

const values = Object.values(student);
console.log(values);


const numbers = [23, 52, 62, 62, 50];

numbers.forEach(number => console.log(number));

console.log(numbers.map(number => number*2));


const products = [
    {name: 'laptop', price: 2200, brand: 'Lenovo', color: 'silver'},
    {name: 'Phone', price: 12000, brand: 'iphone', color: 'silver'},
    {name: 'Watch', price: 3000, brand: 'Hylou', color: 'Black'},
    {name: 'Tab', price: 22000, brand: 'Lenovo', color: 'Golden'},
    {name: 'Airpod', price: 2200, brand: 'iphone', color: 'silver'},
];

const newProduct = {name: "webcam", price: 500, brand: 'lal'};

//Copy products and then ad newproduct 

const newProducts = [...products, newProduct];

// console.log(newProducts);
 

const remainng = products.filter(product => product.name!== 'Phone');
console.log(remainng);
