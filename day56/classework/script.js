
// let num = prompt ("enter your number:")

// let num1 = prompt ("enter your number:")

// function multiplay(x,y){
//     console.log(x * y)
// }

// multiplay(num,num1)5


let num =Number( prompt ("enter your first number:"))

let num1 = Number(prompt("enter your second number:"))

let command = prompt ("Select the desired operation:")


function multiplay(number1,number2,command){
    if (command == "+"){
        console.log(number1 + number2)
    }else if(command == "-"){
        console.log( number1- number2)
    }else if(command == "*"){
        console.log( number1* number2)
    }else if(command == "/"){
        console.log( number1/ number2)
    }else{
        console.log("samsing wrong")
    }
}


multiplay (num,num1,command)

