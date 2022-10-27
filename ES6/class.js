// 32-7 (advanced) Class, constructor, method, create object from class

// একই ধরনের অনেকগুলো অবজেক্ট বানানোর জন্য ক্লাস ব্যবহার করা হয় । 

// ক্লাস এর ভিতর কোনও প্রপার্টিকে এক্সেস করতে হলে this ব্যবহার করা হয় । 

class Support{
name;
designation='support instructor'
address='BD'
constructor(name){
    this.name=name;

}
supportSession(){
    console.log('start a session')
}
}

const mahtab =new Support('Md Mahtab')
const sawon =new Support('jahir uddin')


mahtab.supportSession()
// console.log(mahtab)
// console.log(sawon)