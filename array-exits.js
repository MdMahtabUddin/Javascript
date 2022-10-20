// 29-4 Check an Array using isArray, indexOf, includes, concat 

function megaFriends (friends){
    // কোন একটা জিনিশ এরে কিনা সেটা চেক করার জন্য  ব্যবহার করা হয় । 
if(Array.isArray(friends) == false){
    return 'plaese provide array'
}
    let mega =[0]
    for (const friend of friends){
        if(friend.length > mega.length ){
            mega =friend;
            
            // উপাদান টি এঁরে তে আছে কিনা চেক করার জন্য। 
            if (friend.indexOf('shawon') != -1){
                // console.log('shawon')
            }
            // উপাদান টি এঁরে তে আছে কিনা চেক করার জন্য। 
            if(friend.includes('shawon')){
                console.log('shawon payel')
            }
        }
    }
    return mega;
}
const friend1 =['shawon','pavel', 'monayem'];
const myFriend = megaFriends(friend1)
// console.log(myFriend)
