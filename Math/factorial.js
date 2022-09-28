// PH 20-5 Calculate Factorial of a number using for loop

// 3! = 3*2*1
// 4! =4*3*2*1
// 5! =5*4*3*2*1
// 6! = 6*5*4*3*2*1
// 7! = 7*6*5*4*3*2*1
// ? factorial logic
// 

// ফেক্ট্রিয়ালের ক্ষেত্রে লুপের ভিতর ভ্যরিয়েবল ডিক্লেয়ার করলে মান নতুন করে বার বার সেট হবে । 
// তাই ভ্যরিয়েবলের মান লুপের বাহিরে রাখতে হবে । 
// ভ্যরিয়েবলের মান ১ সেট করতে হবে , জিরো সাথে সংখ্যা গুন করলে জিরো ই হবে । 

let factorial =1;
for(let i= 1; i <=8 ; i++){
    factorial *= i;
}
// console.log(factorial);


// 20-6 Recalculate factorial multiple times using a function

function getFactorial(numbers){
    let factorial =1;
    for(let i=1;i <= numbers;i++){
        factorial *= i;

    }
    return factorial;
}
// const numbers= 11;
let total = getFactorial(8);
console.log(total);