// PH 36-2 Object method property review

const student ={
    name: 'mahtab',
    isRich : false,
    dept:'Information Technology',
    subject:['java', 'oop', 'c++','data structure'],
    bestFriend:{
        name:'sentu',
        dept:'Information Technology',
        subject:['java', 'oop', 'c++','data structure']
    },
    takeExam: function(){
        console.log(this.name,'taking exam' )
    }


}

student.takeExam();
console.log(student.bestFriend.name);