// 29-3 How to split, slice, substr, substring, concat, join
// using split 


// split()  দিয়ে একটা স্ট্রিং কে ছোট ছোট ভাগে ভাগ করা হয় । 

// slice () একটা স্ট্রিং এর ছোট অংশ কে বের করে রিটার্ন করে দেয় । শুরু আর শেষের নাম্বারেরে মাঝে যা থাকবে টা রিটান করবে । 

// substr () একটা স্ট্রিং এর একটা পজিশন থকে যতগুলা অক্ষর দিতে বলা হয় থিক তাই দেয় । যদি বলা হয় পাঁচ এর পর সাত টা ক্যারেক্টার দিতে তাহলে সেটাই করবে । 


const anthem ='amar sonar bangla , ami tomay valobasi';

const words =anthem.split(' ')
// console.log(words)
const withoutA = anthem.split('a');
// console.log(withoutA)

// using slice

const anthem2 =anthem.slice(5,11)
// console.log(anthem2)

// using substring 
const anthem3 =anthem.substring(5,11)
// console.log(anthem3) 

const  anthem4= anthem.substr(5,9);
// console.log(anthem4) 




