// PH 36-1 Module introduction Different way to Create Object

// using objct literal 
const student = {name:'mahtab', department:'it', address:'chandmia Housing'};

// object constructor

const person = new Object();
// console.log(person);

// 3. inherate fron object
const human = Object.create(student)
console.log(human.name)

// 4. create class from object

class People {
    constructor(name, age){
        this.name =name;
        this.age= age;
    }
}
const man = new People('mahtab', 29);
console.log(man);