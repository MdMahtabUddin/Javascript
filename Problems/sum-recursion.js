// 23_5-2 Understand recursion using sum of numbers

function sum(i){
    if(i==1){
        return 1;
    }
return i+sum(--i)
}
console.log(sum(5))

// i+sum(--i)
// 5+sum(4);
// 5+4+sum(3);
// 5+4+3+sum(2);
// 5+4+3+2+1;