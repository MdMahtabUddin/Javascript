// 29-7 Unlimited parameters to a function using arguments

// ফাংশনের মাঝে যদি কোন এক্সশেপশনাল কেইসে প্যারামিটার যোগ করতে হয় , তাহলে arguments ব্যবহার করা যাবে 

function number(num1, num2){
    let result =0;
    for(const addNumber of arguments)
    result= result+addNumber
    return result;
}
const total= number(50,60, 30,40,100)
console.log(total)
