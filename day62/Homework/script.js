
let finalName = document.getElementById("name")
let finalSurname = document.getElementById("surname")
let finalPasword = document.getElementById("pasword")

let userName = prompt("Enter your name:")
let userSurname =  prompt("Enter your surname")
let userPasword = prompt("Enter your pasword:")

let p = document.getElementsByTagName("p")



let user = {
    name: userName,
    surname: userSurname,
    pasword: userPasword 
}

finalName.innerHTML = user.name
finsalSurname.innerHTML = user.surname
finalPasword.innerHTML = user.pasword

function changePasword(){
    let ask = confirm ("namdvilad gsurt parolis Shecvla")
    if(ask == true){
       let userPasword1 = prompt("Enter your first pasword:")
        if (user.pasword === userPasword1){
            let newPasword = prompt("Enter your new pasword:")
            user.pasword = newPasword
            finalPasword.innerHTML = user.pasword 
        }else{
            alert ("The password is incorrect")
        } 
    }else{
        
    }
        
    
}

console.log(user)


