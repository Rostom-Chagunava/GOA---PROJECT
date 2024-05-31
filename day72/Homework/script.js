let number = document.getElementsByClassName("number")
let Oprator = document.getElementsByClassName("operator")

let Sum = document.getElementById("sum")
let Sum1 = document.getElementById("sum1")
let Equal = document.getElementById("equal")

let myArr = []
let myStr = ""

for (let i =0;i<number.length;i++){
    number[i].addEventListener("click",function(){
        myStr += number[i].innerHTML
        Sum.innerHTML +=number[i].innerHTML 
        console.log(myArr)
    })
}

for (let i =0;i<Oprator.length;i++){
    Oprator[i].addEventListener("click",function(){
        myArr.push(myStr)
        myArr.push(Oprator[i].innerHTML)
        Sum.innerHTML +=Oprator[i].innerHTML
        myStr = ""
    })
}

let oprator = ["*","/","+","-"]

function equal(){
    myArr.push(myStr)
    Sum.innerHTML = ""
    // console.log(myArr)
    for(let i =0;i < oprator.length;i++){
        // console.log(oprator[i],"--")
        for(let x=0;x <myArr.length;x++){
            // console.log(myArr[x])
            if(oprator[i] === myArr[x] && oprator[i] ==="*"){
                myArr[x-1] = Number(myArr[x-1]) * Number(myArr[x+1])
                myArr.splice(x-1,3,myArr[x-1])
                // console.log(myArr)
                Sum1.innerHTML = myArr[x-1]
            }else if(oprator[i] === myArr[x] && oprator[i] ==="/"){
                myArr[x-1] =Number(myArr[x-1]) / Number(myArr[x+1])
                myArr.splice(x-1,3,myArr[x-1])
                // console.log(myArr)
                Sum1.innerHTML = myArr[x-1]
            }else if(oprator[i] === myArr[x] && oprator[i] ==="+"){
                myArr[x-1] = Number(myArr[x-1]) + Number(myArr[x+1])
                myArr.splice(x-1,3,myArr[x-1])
                // console.log(myArr)
                Sum1.innerHTML = myArr[x-1]
            }else if(oprator[i] === myArr[x] && oprator[i] ==="-"){
                myArr[x-1] =Number(myArr[x-1]) - Number(myArr[x+1])
                myArr.splice(x-1,3,myArr[x-1])
                // console.log(myArr)
                Sum1.innerHTML = myArr[x-1] 
            }
        }
    }
    myStr = myArr.join("")
    myArr.splice(0,myArr.length)
}

function reset(){
    // myArr.splice(0,myArr.length)
    Sum1.innerHTML = ""
    Sum.innerHTML = ""
    myStr = ""
    // console.log(myStr)
    // console.log(myArr)
}