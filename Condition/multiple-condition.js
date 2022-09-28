// PH 18-7 Handle multiple conditions, and or
// && থাকলে দুটি শর্ত ই পূরণ করতে হবে ।  
// ||  থাকলে যেকোনো একটি শর্ত পূরণ করলে ই হবে । 


var getJob =true;
var moneySaved =200000;
var hasFlat =true;
var hasCar =true;

// && এর দুটি শর্তের একটি ফুলফিল না হলে 
// কন্ডিশনের ৩ টি শর্তের ২ টি হলেও হবে , || যদি সত্য হয় হবে 

if(( getJob ===true && moneySaved >2100000) || hasCar=== true){
    console.log('got married')
}else{
    console.log('never married now')
}