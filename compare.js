// 36-5 (advanced) Compare objects, referential integrity

const first ={a:1}
const second ={a:1}
const third =first
// অবজেক্ট কে রেফারেন্স দিয়ে চেক করে । 
// রেফায়েনশিয়াল ইন্ট্রিগিটি হল দেখতে একরকম হলে ও একি জায়গায় অবস্থান না করলে সমান হবে না । 
// সেহেতু প্রথম এবং দ্বিতীয় সমান হবে না , কিন্তু ১ম এবং ৩য়  সমান হবে । 
// if(first == third){
//     console.log('objects are equal')
// }else{
//     console.log('objects are diffrent')
// }

// another way to prove first and second equal


// স্ট্রিং কে ভ্যালু দিয়ে চেক করে ।। 
if(JSON.stringify(first) == JSON.stringify(second) ){
    console.log('object are equal')
}else{
    console.log('objects are differnt')
}

