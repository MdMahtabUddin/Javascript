// 32-6 (advanced) Implement filter, find on an array of objects

// ফিল্টার() অ্যারের প্রতিটা উপাদানের জন্য যে শর্ত দেয়া হবে , 
// সেটা যারা পূরণ করবে তাদের কে নতুন একটা অ্যারেতে রেখে রিটান করবে । 

// যদি কোনটাই শর্ত পূরণ না করে , তাহলে এম্পটি অ্যারে দিবে । 

// ফাইন্ড সরাসরি এলিমেন্ট দিবে , তবে ফিল্টার অ্যারে দিবে 

const products =[
    { name:'bottle',price:100,brand:'rfl'},
    { name:'glass',price:50,brand:'rfl'},
    { name:'plate',price:50,brand:'rfl'},
    { name:'mug',price:70,brand:'rfl'},
    { name:'spun',price:80,brand:'rfl'}
];

const expensive =products.filter(product=>product.price>=100)
// console.log(expensive)

// ফাইন্ড() অ্যারের প্রথম যে উপাদান শর্তও পূরণ করবে , শুধু সেটাই রিটান করবে । 

const productPrice =products.find(product =>product.price<=50)
console.log(productPrice)