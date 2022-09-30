// PH 36-3 Keys, values, entries, delete, seal, freeze

const bottle={color:'red', hold:'water',price:45};

// getting all properies name 
const keys=Object.keys(bottle);
// console.log(keys);

// getting all properties value 
const values = Object.values(bottle);
// console.log(values);

// getting properties name & values 
const entries= Object.entries(bottle);
// console.log(entries)

// delete property 

delete bottle.price;
// console.log(bottle)



