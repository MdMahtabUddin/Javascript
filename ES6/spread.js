// 31-8 Spread operator, array max, copy arrays

const numbers =[44,34,23,78,98,20];

// const maxInArray = Math.max(...numbers);
// console.log(maxInArray);

// অ্যারে থেকে উপাদান গুলো নিয়ে আসে থ্রি ডটস ... 
// সরাসরি অ্যারে কে হ্যান্ডেল করতে পারে না , তাই থ্রি ডটস দিয়ে অ্যারের উপাদান গুলো আনতে হয় । 

// আগের অ্যারের উপাদান গুলো নিয়ে এসে আরেকটা অ্যারে বানানো যায় 
 
// const numbers2 =[...numbers, 50,888];
// console.log(numbers2)

// revision
// 14 nov 
// const numbers3 =[...numbers, 67,99,45]
// console.log(numbers3)

const mynumber = Math.max(...numbers)

console.log(mynumber)

