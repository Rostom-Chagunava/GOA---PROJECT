let number = document.getElementsByClassName("number")
let oprator = document.getElementsByClassName("operator")

let Sum = document.getElementById("sum")
let Sum1 = document.getElementById("sum1")
let Equal = document.getElementById("equal")

let myNumber = []
let resetArr = [] 

let munstr = ""


for (let i =0;i<number.length;i++){
    number[i].addEventListener("click",function(){
        munstr += number[i].innerHTML
        Sum.innerHTML +=number[i].innerHTML 
        
    })
}

for (let i =0;i<oprator.length;i++){
    oprator[i].addEventListener("click",function(){
        myNumber.push(munstr)
        myNumber.push(oprator[i].innerHTML)
        Sum.innerHTML +=oprator[i].innerHTML
        munstr = ""
    })
}


function equal(){
    myNumber.push(munstr)
    // console.log(myNumber)
    for(let i =0;i < myNumber.length;i++){
        if(myNumber[i] === "*"){
            myNumber[i-1] = Number(myNumber[i-1]) * Number(myNumber[i+1])
            myNumber.splice(i-1,3,myNumber[i-1])
            Sum1.innerHTML = myNumber[i-1] 
        }
    }
    // console.log(myNumber)
    for(let i =0;i < myNumber.length;i++){
        if(myNumber[i] === "/"){
            myNumber[i-1] = Number(myNumber[i-1]) / Number(myNumber[i+1])
            myNumber.splice(i-1,3,myNumber[i-1])
            // console.log(myNumber)
            Sum1.innerHTML = myNumber[i-1] 
        }
    }
    // console.log(myNumber)
    for(let i =0;i < myNumber.length;i++){
        if(myNumber[i] === "+"){
            myNumber[i-1] = Number(myNumber[i-1]) + Number(myNumber[i+1])
            myNumber.splice(i-1,3,myNumber[i-1])
            // console.log(myNumber)
            Sum1.innerHTML = myNumber[i-1] 
        }
    }
    for(let i =0;i < myNumber.length;i++){
        if(myNumber[i] === "-"){
            myNumber[i-1] = Number(myNumber[i-1]) - Number(myNumber[i+1])
            myNumber.splice(i-1,3,myNumber[i-1])
            // console.log(myNumber)
            Sum1.innerHTML = myNumber[i-1] 
        }
    }
}


function reset(){
    myNumber = myNumber.slice(0,myNumber.length)
    Sum1.innerHTML = ""
    Sum.innerHTML = ""
    console.log(myNumber)

}