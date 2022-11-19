// PH 22-6 Write foo, bar, foobar if divisible by 3 or 5 or both

// যখন মাল্টি কন্ডিশন থাকবে তখন সেটা প্রথমে দিতে হবে । 
// কারণ ১৫ কিন্তু ৩/৫ দুটি সংখ্যা দিয়েই যায় । 
// তাই ৩/৫ আগে কন্ডিশন হিসেবে দিলে পরবর্তী কন্ডিশনে যেত না । 
for (let i =1; i<50;i++){
    if(i% 3==0 && i% 5==0){
        console.log('foobar');
    }else if(i% 3==0){
        console.log('foo')
    }else if(i%5==0){
        console.log('bar')
    }else{
        console.log(i);
    }
}

