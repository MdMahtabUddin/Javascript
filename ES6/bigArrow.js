// 31-7 More Arrow functions and big arrow function
// using default parametter num2=25

const number =(num1, num2=25)=>num1+num2;

const newNumber =number(35)
console.log(newNumber);