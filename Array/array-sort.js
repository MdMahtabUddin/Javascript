// 29-6 Have fun with sort and reverse a javascript array

// sort() দিয়ে একটা অ্যারের উপাদান গুলো সিরিয়াল অনুযায়ী সাজানো হয় । 
const num =[4,6,7,9,2,5,1]
console.log(num.sort())

// reverse () অ্যারের উপাদান গুলোকে বিপরীত ক্রম অনুযায়ী সাজায় । 




const number =[66,2,10,23,32,99];
// ডাবল ডিজিটের নাম্বর শট করতে গেলে , জাভাস্ক্রিপ্টে নাম্বার সর্ট করতে গেলে কম্পেয়ার ফাংশন ব্যবহার কর্মতে হবে । 
const sortedNumber =number.sort(function(a,b){
    return a-b ; 
})
// console.log(sortedNumber)
 