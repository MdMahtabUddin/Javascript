// PH 19-7 (optional) Javascript switch case break and default

// ব্যবহার করা হয় অনেকটা কন্ডিশনের মতই । 

var color ='';

// if(color=='green'){
//     console.log('color is green')
// }else if (color=='bule'){
//     console.log('color is blue')
// }else if (color=='red'){
//     console.log('color is red')
// }else{
//     console.log('color is white')
// }


// if/else প্রতিটি কন্ডিশন  চেক করে যায় ,switch কিন্তু সুইচ যেখানে মিল পাবে ঠিক সেই জায়গা তেই চলে যায় । 

switch(color){
    case'blue':
    console.log('color is blue')
    break;
    case 'red':
        console.log('color is red')
        break;

    case 'green':
        console.log('color is green')
        break;

        default:
            console.log('sorry color is black')

}

// switch faster then if/else 

