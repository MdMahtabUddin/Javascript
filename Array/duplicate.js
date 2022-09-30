// 22-2 Remove duplicate items from an array

const names =['shawon','rubel','mona','shawon','rubel','mona'];

function removeDuplicate(){
    const unique =[];
    for(const elements of names){
        // array te kono kichu na thakele minus 1 dia check kore 
        if(unique.indexOf(elements)==-1){ 
            unique.push(elements);
        }
    }
    return unique;
}
const singleName = removeDuplicate(names);
console.log(singleName);
