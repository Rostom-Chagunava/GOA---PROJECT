

// class Person {
//     constructor(username,usersurname,useremail,userpassword){
//         this.username = username;
//         this.usersurname = usersurname;
//         this.useremail = useremail;
//         this.userpassword = userpassword
//     }

//     greet(){
//         console.log(`my name is ${this.username}  my surname is ${this.usersurname}`)
//     }
//     // get name (){
//     //     return `${this.username} ${this.usersurname}`
//     // }
//     // set changeEmail(newemail){
//     //     this.newemail = newemail
//     // }
// }


// // inheritans

// class Student extends Person{
//     constructor(n,a,g){
//         super(n,a)
//         this.g = g
//     }
//     newmetod(){
//         super.greet()
//         console.log(`${this.g}`)
//     }
// }


// const person1 = new Person("rostom","chagunava")

// const person2 = new Student("giorgi","giorgadze","jkjkj")



// person2.newmetod()




// class Calculator {
//     constructor(n1,n2,operator){
//         this.n1 = n1,
//         this.n2 = n2,
//         this.operator = operator
//     }

//     plus(){
//         console.log(this.n1 + this.n2) 
//     }

//     min(){7
//         console.log(this.n1 - this.n2)
//     }
// }

// let add = new Calculator(5,4)

// add.min()
// // person1.greet()

// class test extends Calculator{
//     constructor(s,d){
//         super(s,d)
//     }
//     newmetod(){
//         super.plus()
//         super.min()
//     }
// }
// let  newadd = new test(9,8)
// newadd.newmetod()

// class User {
//     constructor(name,surname){
//         this.name = name,
//         this.surname = surname
//     }
//     greet(){
//         console.log(`my name is ${this.name}, my surname is ${this.surname}`)
//     }
// }

// class Person extends User {
//     constructor(n,s){
//         super(n,s)
//         // super.greet()
//     }
// }





// const user1 = new User("rosotm","chagunava")

// const user2 = new Person("giorgi","giorgidZe")

// user2.greet()



// class Test {
//     constructor(width,hieght){
//         this.width = width,
//         this.hieght = hieght
//     }

//     get sum(){
//         return this.width * this.hieght
//     }

//     set sum([value1,value2]){
//         this.width = value1
//         this.hieght = value2
//     }
// }

// // user1.greet()

// const myobj =new Test (5,9)


// myobj.sum = [2,4]
// console.log(myobj.sum)

class Test2 {


    static count = 0
    static accounts = []

    #password
    constructor(name,surname,age){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.#password = this.#password;
        Test2.count ++; 
        console.log(Test2.count)
        Test2.accounts.push(this)
        console.log(Test2.accounts)
    }

    get Name (){
        return this.name
    }

    get Surname (){
        return this.surname
    }

    get Age (){
        return this.age
    }

    set Newpassword(newEmail){
        this.#password = newEmail;
    }

    static name(){
        console.log("Test")
    }
}


let person1 = new Test2 ("rosotm","chagunava",30,"chagu123")
person1.Newpassword = "rostom123"


Test2.name()
console.log(person1.Name)

