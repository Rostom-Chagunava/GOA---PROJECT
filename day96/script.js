
class Person {

    static count = 0
    static myarr = []
    #userPassword;
    constructor  (userName,userPassword){
        this.userName = userName;
        this.#userPassword = userPassword 
        Person.myarr.push(this)
    }

    static check(select,Name,Password,p){
        select.value === "register" ?  Person.register(Name,Password,p) : Person.login(Name,Password,p)
    }

    static register(Name,Password,p){
        const user = new Person (Name,Password)
        Person.myarr.push(this)
        p.innerHTML = "You have successfully registered"
        console.log(Person.myarr)
        Person.myarr
    }

    static login (Name,Password,p){
        
        for(let i of Person.myarr){
            // console.log("hi")
            if(i.userName == Name  ){
                console.log(i.userName)
                // console.log(Name)
                p.innerHTML = "You are login"
                // p.style.color = "gren"
            }else if(i.userName != Name){
                
                // console.log(i.userName)
                // p.innerHTML = "something is wrong"
                // p.style.color = "red"
            }
        }
    }


}

// const user1 = new Person("rostom","ert123") 
// const user2 = new Person("rostom","ert123")  


// user1.test = "qw123"


const form = document.querySelector("form")
const btn = document.getElementById("btn")

let p = document.getElementById("p")

// let register = document.getElementById("register")

// let login = document.getElementById("login")

let select = document.getElementById("seleqt")

let text = document.getElementById("text")
let password = document.getElementById("password")

btn.addEventListener("click", function(){
    // console.log("hi")
    const userName = text.value
    const userPassword = password.value
    Person.check(select,userName,userPassword,p)
    console.log(Person.myarr)
})


// Person.myFunq()
