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
// name:languageName, founder:creatorName নিক নাম হিসাবে কাজ করবে । 

const {name:languageName, founder:creatorName}=language;
// console.log({languageName, creatorName});

// 4. get value as data type 

// ??

// 5.remove duplicate from array  







