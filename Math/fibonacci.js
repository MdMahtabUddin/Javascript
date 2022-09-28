// PH 21-6 Create a Fibonacci Series using a for loop

//* 1,1,2,3,5,8,13,21,34,55
// পূর্ববর্তী দুই সংখ্যার যোগফল 
// ফিবনাচ্ছি এলিমেন্ট শুরু হবে ০ এবং ১ থেকে 

//? 3rd= 2nd +1st
//? 4th = 3rd+2nd
//? 5th = 4th +3rd
// ? 6th= 5th +4th 
// ? 7th =6th +5th
//! nth = (n-1)th +(n-2)th
//! ith = (i-1)th + (i-2)th 

const fibo =[0,1];
// ফিবনাচ্ছি সিরিজ যেহেতু পূর্ববর্তী দুই সংখ্যার যোগ ফল হিসাব করে , তাই লুপে এরের ইনডেক্স let i=2; 
for(let i =2; i<10; i++){ 
fibo[i]= fibo[i-1]+fibo[i-2];
}
console.log(fibo);
