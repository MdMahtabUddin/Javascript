// 32-5 Map string array, array of objects map, foreach

const products =[
    { name:'bottle',price:100,brand:'rfl'},
    { name:'glass',price:50,brand:'rfl'},
    { name:'plate',price:50,brand:'rfl'},
    { name:'mug',price:100,brand:'rfl'},
    { name:'spun',price:100,brand:'rfl'}
];

const productDetails =products.map(product =>product.name)

console.log(productDetails)