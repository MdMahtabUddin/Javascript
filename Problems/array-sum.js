// PH 21-4 Sum of all numbers in an array

// এরের সব এলিমেন্ট এর যোগ ফল বের করার জন্য । 

const numbers =[32,45,12,50,70,55,15];
let sum =0; 

// for(let i =0;i< numbers.length; i++){
//     const elements =numbers[i]
//     sum += elements;
// }
// console.log(sum);

// revision
// 19nov
for(let number of numbers){
    sum += number
}
console.log(sum)
