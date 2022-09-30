// PH 36-3 Keys, values, entries, delete, seal, freeze

const bottle={color:'red', hold:'water',price:45};

// সব প্রোপার্টির নাম একসাথে পেতে চাইলে keys ব্যবহার করা হয় । 
const keys=Object.keys(bottle);

// সব প্রোপার্টির ভ্যালু একসাথে পেতে চাইলে values ব্যবহার করা হয় । 
const values = Object.values(bottle);

// সব প্রোপার্টির নাম এবং ভ্যালু একসাথে এরের ভিতর পেতে চাইলে Entries ব্যবহার করা হয় । 
const entries= Object.entries(bottle);


// property name never delete but change the value 
Object.seal(bottle);
bottle.price= 255;

// similar with seal but never change anything 
Object.freeze(bottle);

// কোন প্রপার্টি ডিলিট করতে চাইলে ব্যবহার করা হয় 
// কিন্তু আগে যদি seal বা freese ব্যবহার করা হয় তাহলে ডিলিট করা যাবে না । 
// seal মডিফাই করা যাবে , কিন্তু freeze ব্যবহার করলে কোন কিছুই পরিবর্তন করা যাবে না । 

delete bottle.price;
console.log(bottle)



