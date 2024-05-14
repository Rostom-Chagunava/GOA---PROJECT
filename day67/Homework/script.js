let header = document.getElementById("header")
let titel = document.getElementById("headerp")

// date of Register ==== ==

let reName = document.getElementById("re-name")
let reSurname = document.getElementById("re-surname")
let reEmail = document.getElementById("re-email")
let rePassword = document.getElementById("re-password")

let rName = document.getElementById("rname")
let rSurname = document.getElementById("rsurname")
let rEmail = document.getElementById("remail")
let rPassword = document.getElementById("rpassword")

let formRegister = document.getElementById("register")


// date of Log in  ======
let logName = document.getElementById("log-name")
let logSurname = document.getElementById("log-surname")
let logEmail = document.getElementById("log-email")
let logpassword = document.getElementById("log-password")

let lName = document.getElementById("lname")
let lEmail = document.getElementById("lemail")
let lPassword = document.getElementById("lpassword")

let formLogin = document.getElementById("log-in")

// /=============

function personDate(name,surname,email,password){
    this.name = name
    this.surname = surname
    this.email = email
    this.password = password
}

let myArr = []

function register(){
    if(reName.value == ""){
        reName.style.backgroundColor = "red"
        formRegister.style.boxShadow = "0 0 10px red"
        rName.innerHTML = "Enter your name!!!"
        rName.style.color = "red"
    }else if(reSurname.value == ""){
        reSurname.style.backgroundColor = "red"
        formRegister.style.boxShadow = "0 0 10px red"
        rSurname.innerHTML = "Enter your surname!!!"
        rSurname.style.color = "red"
    }else if(reEmail.value == ""){
        reEmail.style.backgroundColor = "red"
        formRegister.style.boxShadow = "0 0 10px red"
        rEmail.innerHTML = "Enter your Email!!!"
        rEmail.style.color = "red"
    }else if(rePassword.value == ""){
        rePassword.style.backgroundColor = "red"
        formRegister.style.boxShadow = "0 0 10px red"
        rPassword.innerHTML = "Enter your password!!!"
        rPassword.style.color = "red"
    }else{
        let person = new personDate(reName.value,reSurname.value,reEmail.value,rePassword.value)
        myArr.push(person)
        console.log(myArr)

        reName.style.backgroundColor = "#ffffff"
        formRegister.style.boxShadow = "0 0 10px black"
        rName.innerHTML = ""
        rName.style.color = "red"

        reSurname.style.backgroundColor = "#ffffff"
        formRegister.style.boxShadow = "0 0 10px black"
        rSurname.innerHTML = ""
        rSurname.style.color = "red"

        reEmail.style.backgroundColor = "#ffffff"
        formRegister.style.boxShadow = "0 0 10px black"
        rEmail.innerHTML = ""
        rEmail.style.color = "red"

        rePassword.style.backgroundColor = "#ffffff"
        formRegister.style.boxShadow = "0 0 10px black"
        rPassword.innerHTML = ""
        rPassword.style.color = "red"

        reName.value = ""
        reSurname.value = ""
        reEmail.value = ""
        rePassword.value = ""

        logName.value = ""
        logEmail.value = ""
        logpassword.value = ""

        formRegister.style.display = "none"
        formLogin.style.display = "flex"
    }
}

// ====== log in/   


function login(){
    if(logName.value == ""){
        logName.style.backgroundColor = "red"
        formLogin.style.boxShadow = "0 0 10px red"
        lName.innerHTML = "Enter your name!!!"
        lName.style.color = "red"
    }else if(logEmail.value == ""){
        logEmail.style.backgroundColor = "red"
        formLogin.style.boxShadow = "0 0 10px red"
        lEmail.innerHTML = "Enter your Email!!!"
        lEmail.style.color = "red"
    }else if(logpassword.value ==""){
        logpassword.style.backgroundColor = "red"
        formLogin.style.boxShadow = "0 0 10px red"
        lPassword.innerHTML = "Enter your Password!!!"
        lPassword.style.color = "red"
    }else{

        logName.style.backgroundColor = "#ffffff"
        formLogin.style.boxShadow = "0 0 10px black"
        lName.innerHTML = ""
        lName.style.color = "red"

        logEmail.style.backgroundColor = "#ffffff"
        formLogin.style.boxShadow = "0 0 10px black"
        lEmail.innerHTML = ""
        lEmail.style.color = "red"

        logpassword.style.backgroundColor = "#ffffff"
        formLogin.style.boxShadow = "0 0 10px black"
        lPassword.innerHTML = ""
        lPassword.style.color = "red"

        for(let i = 0;i<myArr.length;i++){
            if(myArr[i].name == logName.value){
                lName.innerHTML = ""
                if(myArr[i].email == logEmail.value){
                    lEmail.innerHTML = ""
                    if(myArr[i].password == logpassword.value){ 
                        lPassword.innerHTML = ""
                        titel.innerHTML = myArr[i].name[0] + "." + myArr[i].surname[0]
                        header.style.display = "flex"
                        formLogin.style.display = "none"

                        logName.value = ""
                        logEmail.value = ""
                        logpassword.value = ""
                    }else{
                        lPassword.innerHTML = "The Password is incorrect!!!"
                    }
                }else{
                    lEmail.innerHTML = "The Email is incorrect!!!"
                }
            }else{
                lName.innerHTML = "The Name is incorrect!!!"
            }
        }

    }
    
}


function Register(){
    formLogin.style.display = "flex"
    formRegister.style.display = "none"
}

function Login(){
    formLogin.style.display = "none"
    formRegister.style.display = "flex"
}

function exit(){
    header.style.display = "none"
    formRegister.style.display = "flex"

    // logName.value = ""
    // logEmail.value = ""
    // logpassword.value = ""
    
}


