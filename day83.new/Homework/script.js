let martix = [
    [["hidden","hidden","hidden"],
    ["hidden","visible","hidden"],
    ["hidden","hidden","hidden"]],

    [["hidden","hidden","visible"],
    ["hidden","hidden","hidden"],
    ["visible","hidden","hidden"]],

    [["hidden","hidden","visible"],
    ["hidden","visible","hidden"],
    ["visible","hidden","hidden"]],

    [["visible","hidden","visible"],
    ["hidden","hidden","hidden"],
    ["visible","hidden","visible"]],

    [["visible","hidden","visible"],
    ["hidden","visible","hidden"],
    ["visible","hidden","visible"]],

    [["visible","hidden","visible"],
    ["visible","hidden","visible"],
    ["visible","hidden","visible"]],
]

let title = document.getElementById("title")

let button = document.getElementById("reset")


// 
let role1 = document.getElementById("dice1-div1")
let role2 = document.getElementById("dice1-div2")
let role3 = document.getElementById("dice1-div3")
let role4 = document.getElementById("dice1-div4")
let role5 = document.getElementById("dice1-div5")
let role6 = document.getElementById("dice1-div6")
let role7 = document.getElementById("dice1-div7")
let role8 = document.getElementById("dice1-div8")
let role9 = document.getElementById("dice1-div9")
// 
let Role1 = document.getElementById("dice2-div1")
let Role2 = document.getElementById("dice2-div2")
let Role3 = document.getElementById("dice2-div3")
let Role4 = document.getElementById("dice2-div4")
let Role5 = document.getElementById("dice2-div5")
let Role6 = document.getElementById("dice2-div6")
let Role7 = document.getElementById("dice2-div7")
let Role8 = document.getElementById("dice2-div8")
let Role9 = document.getElementById("dice2-div9")
// 





button.addEventListener("click", function(){

    let number = Math.floor(Math.random()*6)
    let number1 = Math.floor(Math.random()*6)

    role1.style.visibility =martix [number][0][0]
    role2.style.visibility =martix [number][0][1]
    role3.style.visibility =martix [number][0][2]
    role4.style.visibility =martix [number][1][0]
    role5.style.visibility =martix [number][1][1]
    role6.style.visibility =martix [number][1][2]
    role7.style.visibility =martix [number][2][0]
    role8.style.visibility =martix [number][2][1]
    role9.style.visibility =martix [number][2][2]

    // 

    Role1.style.visibility =martix [number1][0][0]
    Role2.style.visibility =martix [number1][0][1]
    Role3.style.visibility =martix [number1][0][2]
    Role4.style.visibility =martix [number1][1][0]
    Role5.style.visibility =martix [number1][1][1]
    Role6.style.visibility =martix [number1][1][2]
    Role7.style.visibility =martix [number1][2][0]
    Role8.style.visibility =martix [number1][2][1]
    Role9.style.visibility =martix [number1][2][2]

    console.log(number)
    

    




    
    if(number > number1){
        title.innerHTML = "Vin  Player1 .!"
    }else if(number < number1){
        title.innerHTML = "Vin  Player2 .!"
    }else{
        title.innerHTML = "Draw .!"
    }
    console.log(number)
    console.log(number1)
})