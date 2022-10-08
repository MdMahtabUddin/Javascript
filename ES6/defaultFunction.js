// 31-4 Function default parameter for not provided values
// কোন কারণে যদি প্যারামিটার দেয়া না হয় । তখন ডিফল্ট প্যারামিটার ব্যবহার করা হয় second =0 । 

function num(first, second =0){

    // before ES6 this method apply 
    // if (second === undefined){
    //     second = 0;
    // }
    const total = first + second;

    return total
}

const myNumber =num(11);
console.log(myNumber);