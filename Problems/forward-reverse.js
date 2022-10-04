// 23_5-1 Understand for loop in a forward and reverse way

// লুপের মত করে ফাংশন ব্যবহার করে বার বার কল করার কাজ । 
// ফাংশনের ভিতর থেকে নিজেকে নিজে কল করা হল রিকারশন । 

function consoleNumber(name){
    if(name >10){
        return;
    }
    console.log(name);
    consoleNumber(name+1);
    

}
consoleNumber(1)