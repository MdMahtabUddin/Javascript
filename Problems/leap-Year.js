// PH 20-4 Check whether a year is a Leap Year or not

// function isLeapYear(myYear){
// if(myYear % 4 == 0){
//     return true;
// }
// return false;
// }
// const yearIs =2040;
// const myYear= isLeapYear(yearIs)
// console.log(myYear);

// *Note: 
//! 1) If a year is divisible by 400, it's a leap year
//! 2) Otherwise, if a year is divisible by 100, it's not a leap year
//! 3) Otherwise, if a year is divisible by 4, it's a leap year

function isLeapYear(){
    if(yearIs %400 ==0 && yearIs !=100 || yearIs %4 ==0){
        console.log(yearIs +' is a leap year')
    }else{
        console.log(yearIs +'is not a leap year')
    }
    

}
const yearIs =2050;
const myYear= isLeapYear(yearIs);

