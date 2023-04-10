const products = [
    {name: 'laptop', price: 2200, brand: 'Lenovo', color: 'silver'},
    {name: 'Phone', price: 12000, brand: 'iphone', color: 'silver'},
    {name: 'Watch', price: 3000, brand: 'Hylou', color: 'Black'},
    {name: 'Tab', price: 22000, brand: 'Lenovo', color: 'Golden'},
    {name: 'Airpod', price: 2200, brand: 'iphone', color: 'silver'},
]


// const brands = products.map(product => product.brand);

// console.log(brands);


// const price = products.map(price => price.price);

// console.log(price); 


products.forEach(product =>{
    console.log(product);
})



// Filter 

const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);



const spacificname = products.filter(p => p.name.includes('a'));


console.log(spacificname);