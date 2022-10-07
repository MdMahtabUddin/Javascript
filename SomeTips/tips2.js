// LWS Tips2=11
// 1. swaping values  
const array =[24,45,65,85,35];
// using temp  
let temp =array[0];
array[0]=array[4];
array[4]=temp;

// using swap 
[array[1],array[4]]=[array[4],array[1]];
// console.log(array);

// 2. 

// ??

// 3.destructuring alisis 

//3. destructuring aliasis 
const language ={
    name: 'javascript',
    founded:1995,
    founder:'branden eich'
};

const {name, founder}=language;
console.log({name, founder});



