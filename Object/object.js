// PH 19-6 multiple ways to get and set object property

var computer ={
    price:35699,
    storage:'32GB',
    processor:'intel',
    model:'dell'
};

// set a property value 
computer.price =41599;

// diffrent ways of set a value of object property 

computer['price']=23599;

// property value set using varriable  
const computerPrice ='price';
computer[computerPrice]=51899;
console.log(computer.price);

