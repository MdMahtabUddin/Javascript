// LWS

//1. remove falsy value from any array 

// ??

//2. convert any value to boolean  
// console.log('mahtab');

// যেকোনো ভ্যালু কে বুলিয়ানে কনভার্ট করতে চাইলে সামনে !! সাইন ব্যবহার করলেই হবে । 
// using !! infront of any value  
// console.log(!! 'mahtab'); 

// we can also use Boolean()
// console.log(Boolean('Mahtab'));

// 3. Resising any array 

const animal =['mahtab','shawon','rubel','pavel','mona'];

// we can use array length property  
// রিসাইজ করার জন্য লেন্থ উল্লেখ করে দিলেই হবে । 
animal.length =3;
// console.log(animal)


// 4. how to flattern a multi dimenstional array  

const students =['mahtab',['shawon','payel'],['rubel,jannat']];


// we can use Array.flat method to flatren one level array 
// console.log(students.flat());

// multi level array 
const friens =['mahtab',['shawon',['mona'], 'payel'],['rubel,jannat']];

// we can pass Infinity parameter to multilevel array 
// console.log(friens.flat(Infinity));

// 5 Replace all occurance of a String 

const qoute ='React is a popular framework in mordern web apps. Most popular front end framework right now';

// replace all occurance framework with library

// g means global access to replace all , without g replace only first one 

// console.log(qoute.replace(/framework/g, 'library'))



// 6 .log values with varriable name smartly 

const library1 ='reactjs';
const library2 ='Vuejs';
const library3 ='Angularjs';

// console.log({library1})
// console.log({library2})
// console.log({library3})


//7 .know performance of a task 

// একটা কাজ  হতে কত সময় লাগলো , তা জানার জন্য  শুরুতে এবং শেষে performance.now() ব্যবহার করতে হবে । 

const start = performance.now()
for (let i =0; i< 10;i++){

}
const end =performance.now();

// console.log({end , start})



