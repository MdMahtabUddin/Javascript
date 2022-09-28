// PH 20-3 Check even and odd number using function 

// মডিউলাস %২ = জিরো হলে ইভেন নাম্বার , যদি ভাগশেষ থাকে তাহলে ওড্ড নাম্বার । 

function isEven(number){
    if (number %2 ==0){
        return true;
    }
    return false;
}
// const number =455; /* odd number check*/
const number =450; /*even number check*/
const isItEven =isEven(number)
console.log(isItEven);