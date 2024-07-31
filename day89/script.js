let userName = document.getElementById('username')
let userNumber = document.getElementById('usernumper')
let userpassweord = document.getElementById('userpassword')

let Name = document.getElementById('name')
let surname = document.getElementById('surname')
let passweord = document.getElementById('password')

// 
let change = document.getElementsByClassName("change")

// 

let button = document.getElementById("btn")


let myObj = {
    userName : "username",
    surname : "usersurname",
    usepasword : "userpassword",

    changName : (newname) =>{
        this.userName  = newname
        Name.innerHTML = this.userName

    },

    changsurname: (newsurname)  =>{
        this.surname = newsurname
        surname.innerHTML = this.surname 
    },

    changpassword: (newpassword) =>{
        this.usepasword = newpassword
        passweord.innerHTML = this.usepasword
    }
}


button.addEventListener("click",function(){
    myObj.changName(userName.value)
    myObj.changsurname(userNumber.value)
    myObj.changpassword(userpassweord.value)
    console.log(myObj.usepasword)
})




for(let i =0; i <change.length; i++){
    change[i].addEventListener("click",function(){
        if(i === 0){
            let name = prompt("enter new name:")
            myObj.changName(name)
        }else if(i === 1){
            let surName = prompt("enter new surmane")
            myObj.changsurname(surName)
        }else if(i === 2){
            let newpassword = prompt("enter new password")
            myObj.changpassword(newpassword)
        }
    })
    
}



// /*/*/*/*/*/*/*/*/**/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/ */

// let myobj = {
//     name: "user",
//     number: "usersurname",
//     passweord:"user1",
//     changename: function(newname){
//         this.name = newname;
//         Name.innerHTML = this.name
//     },
//     changenumber: function(newnumber){
//         this.number = newnumber;
//         number.innerHTML = this.number
//     },
//     changepasword: function(newpassword){
//         this.passweord = newpassword;
//         passweord.innerHTML = this.passweord
//     }

// }


// button.addEventListener("click", function(){
    
//     myobj.changename(userName.value)
//     myobj.changenumber(userNumber.value)
//     myobj.changepasword(userpassweord.value)

//     // myobj.name = userName.value
//     // myobj.number = userNumber.value
//     // myobj.passweord = userpassweord.value

//     // console.log(myobj)

//     // Name.innerHTML = myobj.name
//     // number.innerHTML = myobj.number
//     // passweord.innerHTML = myobj.passweord
  
// })


// changeName.addEventListener("click", function(){
//     let name = prompt("enter new name:")
//     myobj.changename(name)
// } )


// chnagesurname.addEventListener("click", function(){
//     let newnumber = prompt("enter new number")
//     myobj.changenumber(newnumber)
// } )


// changepasword.addEventListener("click", function(){
//     let newpassword = prompt("enter new password")
//     myobj.changepasword(newpassword)
// } )







