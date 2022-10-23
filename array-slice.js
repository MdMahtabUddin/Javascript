// 29-5 Get part of an array and insert elements using slice, splice

const number =[50,33,45,27,12,99,30];


const numberslice =number.slice(3,5)


// remove from array  
const numberSplice =number.splice(3,2)


// added number in array  
const numberSplice2 =number.splice(3,2,70,999,333)
// console.log(numberSplice2)
console.log(number)


// যদি শুরু অনিধারিত হয় তবে ইনডেক্স জিরো থেকে স্লাইস শুরু হয় । 
// স্লাইস করলেও আসল এঁরে পরিবর্তন হবে না । 

// স্প্লাইস দিয়ে এঁরে থেকে রিমুভ করা হয় । 
// স্প্লাইস আসল এরে কে পরিবর্তন করে । রিমুভ করা ইনডেক্স ভ্যালু থাকবে না । 

// স্প্লাইস দিয়ে নতুন মান ও যোগ করা যাবে । 





