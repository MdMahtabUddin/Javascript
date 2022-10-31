
// 35-8 (advanced) Callback function and pass different functions

// একটা fangshon কে যদি আরেকটা ফাংশনের প্যারামিটার হিসাবে পাঠানো হয় সেটাকে callback ফাংশন বলে । 

function welcome (name, greetHandler){
greetHandler(name)
}
function greetMorning(name){
    console.log('Good Morning', name)

}
welcome('mahtab',greetMorning)