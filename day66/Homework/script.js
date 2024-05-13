let rName = document.getElementById("r-name")
let rPassword = document.getElementById("r-password")
let pName = document.getElementById("rname")
let pPassword = document.getElementById("rpassword")

let lName = document.getElementById("l-name")
let lPassword = document.getElementById("l-password")
let logName = document.getElementById("loginame")
let logPasswor = document.getElementById("loginpssword")

let userName = document.getElementById("name")

let formRegister = document.getElementById("regiter")
let formLogin = document.getElementById("login")


function Date(name,password){
    this.name = name
    this.password = password
}

let personDate = []

function registerDates(){
    if(rName.value == ""){
        rName.style.backgroundColor = "red"
        pName.innerHTML = "Enter your name!!"
        pName.style.color = "red"
        formRegister.style.boxShadow = "0 0 10px red"
        formRegister.style.border = "red"
    }else if (rPassword.value == "") {
        rPassword.style.backgroundColor = "red"
        pPassword.innerHTML = "Enter your password!!"
        pPassword.style.color = "red"
        formRegister.style.boxShadow = "0 0 10px red"
        formRegister.style.border = "red"

    }else{
        rName.style.backgroundColor = "#ffffff"
        pName.innerHTML = ""
        pName.style.color = "none"
        formRegister.style.boxShadow = "0 0 10px black"
        formRegister.style.border = "black"

        rPassword.style.backgroundColor = "#ffffff"
        pPassword.innerHTML = ""
        pPassword.style.color = "none"
        formRegister.style.boxShadow = "0 0 10px black"
        formRegister.style.border = "black"

        let person = new Date(rName.value,rPassword.value)
        personDate.push(person)
        rName.value = ""
        rPassword.value = ""
    }
}


function loginDate(){
    if( lName.value == ""){
        lName.style.backgroundColor = "red"
        logName.innerHTML = "Enter your name!!"
        userName.innerHTML = ""
        logName.style.color = "red"
        formLogin.style.boxShadow = "0 0 10px red"
        formLogin.style.border = "red"
    }else if(lPassword.value == ""){
        lPassword.style.backgroundColor = "red"
        logPasswor.innerHTML = "Enter your password!!"
        userName.innerHTML = ""
        logPasswor.style.color = "red"
        formLogin.style.boxShadow = "0 0 10px red"
        formLogin.style.border = "red"
    }
    else{
        lName.style.backgroundColor = "#fff"
        logName.innerHTML = ""
        logName.style.color = "none"
        formLogin.style.boxShadow = "none"
        formLogin.style.border = "none"

        lPassword.style.backgroundColor = "#fff"
        logPasswor.innerHTML = ""
        logPasswor.style.color = "none"
        formLogin.style.boxShadow = "0 0 10px black"
        formLogin.style.border = "1px solid black"
    }

    for(let i = 0;i < personDate.length;i++){
        if(personDate[i].name == lName.value){
                if(personDate[i].password == lPassword.value){
                    userName.innerHTML = personDate[i].name
                    userName.style.color = "#000"
                    lName.value = ""
                    lPassword.value = ""
                }else{
                    userName.innerHTML = "The password is wrong"
                    userName.style.color = "red"
                }
                
            }else{
                userName.innerHTML = "The name is wrong"
                userName.style.color = "red"
            }
        }
}



