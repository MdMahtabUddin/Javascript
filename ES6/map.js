// 32-4 Array map to do one line loop magic

// অ্যারের উপাদান গুলোকে দিগুণ করে আরেকটা অ্যারে বানানো ।  
const numbers =[2,4,6,8,10];
let output= []
for(const number of numbers){
const result =number*2
 output.push(result)
}
// console.log(output)


// উপরের সম্পূর্ণ কাজ ই ম্যাপের মাধ্যমে খুব সহজে করা যায় 
const output2 =numbers.map(num =>num*2)
// console.log(output2)


// map() অ্যারের প্রতিটা উপাদানের জন্য ফাংশন কল করে । 
// ফাংশনের নতুন মান গুলো একটা অ্যারেতে রিটান করে । 


// loop through each Element
// for each Element call the provided function
// result for each Element stored in a array 


 