// 32-2 Destructuring Object to extract values to variables

const person ={name:'pavel',address:'gunrajdi',phone:019194515,id:101};

// ডিস্ট্রাকচারিং করার সময় প্রোপার্টির নাম গুলো বাম পাশে হবে , ডান পাশে হবে অবজেক্টের নাম । 
const {name, address}= person

console.log(name);
console.log(address)
