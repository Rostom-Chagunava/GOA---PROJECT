
let userName = document.getElementById("name") 
let userSurname = document.getElementById("surname")
let userPasswoed = document.getElementById("password")

let finalName = document.getElementById("username")
let finalSurname = document.getElementById("usersurname")
let finalPassword = document.getElementById("userpassword")

let changebutton = document.getElementById("buton")

let userDate = {
    name: userName,
    surname: userSurname,
    password: userPasswoed,
}

let buton = false

function finaldate(){
    
    finalName.innerHTML = userDate.name.value
    finalSurname.innerHTML = userDate.surname.value 
    finalPassword.innerHTML = userDate.password.value

    userDate.name.value = ""
    userDate.surname.value = ""
    userDate.password.value = ""

    buton = !buton

    if(buton === true && finalName.innerHTML.length === finalName.innerHTML.length === finalName.innerHTML.length >0){
        changebutton.innerHTML = "Reset"  
    }else{
        changebutton.innerHTML = "Submit"
    }
    // console.log(finalName.innerHTML.length)
    // console.log(buton)
}

function changePassword(){
    let ask = confirm("Do you really want to change a password?")
    if(ask == true){
        let testPassword = prompt ("Enter old password:")
        if(testPassword == finalPassword.innerHTML){
            let newPassword = prompt ("Enter new password:")
            userDate.password = newPassword
            finalPassword.innerHTML = userDate.password
        }else{
            alert("The password is incorrect!")
        }
    }
}