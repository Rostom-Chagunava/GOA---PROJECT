//dateo of form1     ////
let form1 = document.getElementById("form1")
let Name = document.getElementById("rname")
let Surname = document.getElementById("rsurname")
let Age = document.getElementById("rage")

//date of div 1 ////
let div1 = document.getElementById("div1")
let uName = document.getElementById("uname")
let uSurname = document.getElementById("usurname")
let uAge = document.getElementById("uage")

// date of ask1  ////
let ask1 = document.getElementById("ask1")
let askspan = document.getElementById("uname1")
let button1 = document.getElementById("button1")

// date of form2/////
let form2 = document.getElementById("form2")
let text2 = document.getElementById("text2")
let form3 = document.getElementById("form3")

// date of form3///

let futureAge = document.getElementById("year")
let checkbox = document.getElementById("ask")

// date if div////
let container = document.getElementById("contaner4")

// date of last page///
let userName = document.getElementById("uname5")
let result = document.getElementById("futur-year")
let lastPage = document.getElementById("lastpage")
let lastAge = document.getElementById("lastage")

// /// 
let buttonExit = document.getElementById("exit5")

function dateConstruqtor(name,surname,age,time,newTime){
    this.name = name
    this.surname = surname
    this.age = age
    this.time = time
    this.newTime = newTime
    this.changeTime = function(){
       return Number(time) + Number(newTime)
    }
    this.changeAge = function(){
        return Number(age) + Number(newTime)
    }
}

let year = new Date()

function submit1(){
    let personDate = new dateConstruqtor(Name.value,Surname.value,Age.value,year.getFullYear(),
    futureAge.value)
    console.log(personDate)
    uName.innerHTML = personDate.name.toUpperCase()
    uSurname.innerHTML = personDate.surname.toUpperCase()
    uAge.innerHTML = personDate.age
    askspan.innerHTML = personDate.name.toUpperCase()

    div1.style.display = "flex"
    ask1.style.display = "flex"
    form1.style.display = "none"
    button1.style.display ="flex"
}

function submit2(){
    div1.style.display = "none"
    ask1.style.display = "none"
    button1.style.display ="none"
    form2.style.display = "flex"
    form3.style.display = "flex"
    text2.style.display = "flex"
}


function check(){
    if(checkbox.checked == true){
        // container.style.display = "flex"
        form3.style.display = "none"
        form2.style.display = "none"
        form3.style.display = "none"
        text2.style.display = "none"
        lastPage.style.display = "block"
        buttonExit.style.display = "block"
        let personDate = new dateConstruqtor(Name.value,Surname.value,Age.value,year.getFullYear(),
        futureAge.value)
        console.log(personDate.name)
        userName.innerHTML = personDate.name.toUpperCase()
        result.innerHTML = personDate.changeTime()
        lastAge.innerHTML = personDate.changeAge()
        console.log(personDate)
    }else{
        // container.style.display = "none"
        lastPage.style.display = "none"
        form3.style.display = "flex"
        form2.style.display = "none"
        form3.style.display = "none"
        text2.style.display = "none"
    }
}

function Exit(){
    lastPage.style.display = "none"
    buttonExit.style.display = "none"
    form1.style.display = "flex"
    Name.value = ""
    Surname.value = ""
    Age.value = ""
}