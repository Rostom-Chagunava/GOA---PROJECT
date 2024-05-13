let sum = document.getElementById("sum")

let box = document.getElementById("box")
let box1 = document.getElementById("box1")

let result = 0

function moveBox(){
    
    let number = Math.floor(Math.random() * 1000)
    let number1 = Math.floor(Math.random() * 1000)

    box1.style.top = number + "px"
    box1.style.right = number1 + "px" 

    if ((number >= 100 && number <= 400) && (number1 >=450 && number1 <= 800 )){
        result += 1
        sum.innerHTML = result
        box.style.border = "solid 2px #0dae0d"
        box1.style.border = "solid 2px #0dae0d"
    }else{
        box.style.border = "solid 2px #ff0000"
        box1.style.border = "solid 2px #ff0000"
    }

}