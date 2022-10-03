// length : length property return the length of a string 

let myName  ='Mahtab';

const length = myName.length;
// console.log(length);

// Finding SubString 

// indexOf
let myBio = 'i am a react developer';
// console.log(myBio.indexOf('react'));

// Extracting SubString 

// Slice 
// return the subString as a new string. two position start and end \

let fruits = 'mango, banana, orange, apple';
// console.log(fruits.slice(7,21));

// subString 
// similar to slice ()but negative index value ingnore by js  
// console.log(fruits.substring(15,-2));


// Extracting character 
// charAt 
// return the character at a specific index in string , if its not available then return nothing 
// console.log(fruits.charAt(15));

// console.log(fruits.charCodeAt(16));

// propertyAccess 
// es5 allow property access [] on string its return a character .  
// console.log (fruits[9]);

// concat 
// used for concatenation of two string  
// console.log(myBio.concat(",from bd"));


// replace
// it only replaces thr first match and return new replaced string 
let reData = myBio.replace('react', 'javascript');
// console.log(reData);

// split  
// used to convert a string to an array
console.log(myBio)
