
let userName = document.getElementById("name")
let userSurname = document.getElementById("surname")
let userAge = document.getElementById("age")
let userLastage = document.getElementById("lasfage")
let Uname = document.getElementById("username")

let lastAge = document.getElementById("lastage")



function chageAge(name,surname,age,LastAge){
    this.name = name
    this.surname = surname
    this.age = age
    this.LastAge = LastAge
    this.ChageAge = function(LastAge){
        this.age = LastAge
    }
}

function Age(){
    let personDate = new chageAge(userName.value,userSurname.value,userAge.value,userLastage.value)
    let futureAge = Number(personDate.age) + Number(personDate.LastAge)
    personDate.ChageAge(futureAge)

    lastAge.innerHTML = personDate.age
    Uname.innerHTML = personDate.name
    console.log(personDate)

}