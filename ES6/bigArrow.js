// 31-7 More Arrow functions and big arrow function
// using default parametter num2=25

// arrow function এ প্যারামিটার একের অধিক হলে ব্রাকেট ব্যবহার করতে হবে , যদি না থাকে তাহলেও করতে হবে। 
// যদি একটা প্যারামিটার থাকে ব্রাকেট ব্যবহার না করলেও চলবে । 

// const number =(num1, num2=25)=>num1+num2;

// const newNumber =number(35)
// console.log(newNumber);



// multiline arrow function  

const doMath =(x,y)=>{
    const sum = x+y;
    const diff =x-y;
    const result = diff * sum;
    const output =result *5;
    return output;

}
const myNumber =doMath(50,23)
console.log(myNumber)

// মাল্টিলাইন করতে গেলে সেকেন্ড ব্রাকেট ব্যবহার করতে হবে । 

// সিঙ্গেল লাইনে রিটান করতে হবে না , তবে মাল্টিলাইনের ক্ষেত্রে রিটান করতে হবে । 

// সিঙ্গেল লাইনে অটো রিটান করে তাই ইমপ্লিসিট রিটান বলে । 
// মাল্টিলাইনে যেহেতু রিটান লিখে দিতে হয় , তাই এক্সপ্লিসিট রিটান বলে । 