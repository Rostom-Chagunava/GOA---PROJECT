

// let newName = prompt ("enter your name:")

// let userDate = {
//     name: "rostom.",
//     surname : "chagunava.",
//     pin : "12345678.",
//     debit : "100."
// }

// userDate.name = newName

// console.log("Name of user:",userDate.name,"Surname of user:",userDate.surname,

// "pin of user:",userDate.pin,"debit of user:",userDate.debit)



let userName = prompt("enter your name:")

let userSurname = prompt("enter your surname:")

let userPasword = prompt ("enter your parol:")

let userDate = {
  name : "",
  surname:"",
  pasword :""
}

userDate.name = userName

userDate.surname = userSurname  

userDate.pasword = userPasword

console.log(userDate)


let y = confirm("Do you want a new password?")



if (y == true){
  
  userDate.pasword == prompt("enter your new pasword:")
}else if( y == false){
  userDate.pasword == userPasword
}





// console.log(userDate.name,userDate.surname,userDate.pasword)

console.log(userDate["name" + "surname" + "pasword"])


// function validateUsr(username) {
  
//     let alpa = "abcdefghijklmnopqrstuvwxyz1234567890_"
    
//     if(username.length >= 4 && username.length <= 16){
      
//       x = 0

//       for(let i of username){
//         if (!(alpa.includes(i))){
//             // console.log(true)
//             x += 1
//         // }else if(i == " "){
//         //     console.log(false)
//         }else{
//           x += 0
//         }
//       }
//     }
//     if (x == username.length){
//       return true
//     }else{
//       return false
//     }
//   } 


// console.log(validateUsr("r8_1t12m")) 



