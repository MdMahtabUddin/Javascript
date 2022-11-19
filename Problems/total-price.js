// PH 22-8 Calculate the total cost of the products in a shopping cart

const shopping =[
    {name:'Laptop', price:60000, quantity:1},
    {name:'Mobil', price:50000, quantity:1},
    {name:'Watch', price:6000, quantity:2},
    {name:'Shirt', price:600, quantity:3},
    {name:'Pant', price:1200, quantity:3}
];
let totalCart =0;
for (const cart of shopping){
    const productTotal =cart.price *cart.quantity;
    totalCart += productTotal;


}
console.log(totalCart)


// revision 19 nov 

for(let cart of shopping){
    const total = cart.price *cart.quantity
    totalCart +=total
}
console.log(totalCart)
