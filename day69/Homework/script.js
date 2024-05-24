let number = document.getElementsByTagName("button")
let Sum = document.getElementById("sum")
let Sum1 = document.getElementById("sum1")

let result = ""
let myResult = ""

let myArr = []

for(let i = 0;i < number.length;i++){
    number[i].addEventListener("click",function(){
    Sum.innerHTML += number[i].innerHTML 
    result += number[i].innerHTML
    })
}

function equal(){
    myResult = result
    myResult = myResult.replaceAll("*","!")
    myResult = myResult.replaceAll("/","!")
    myResult = myResult.replaceAll("+","!")
    myResult = myResult.replaceAll("-","!")

    for(let a = 0;a < result.length;a++){
        if(result[a] === "*"){
            myArr = myResult.split("!")
            myArr[1]=(Number(myArr[0])*Number(myArr[1]))
            myArr = myArr.slice(1)
            myResult = myArr.join("!")
            // console.log(myArr)
            // console.log(myResult)
            Sum1.innerHTML=myArr[0]
            
        }else if(result[a] === "/"){
            myArr = myResult.split("!")
            myArr[1]=(Number(myArr[0])/Number(myArr[1]))
            myArr = myArr.slice(1)
            myResult = myArr.join("!")
            // console.log(myArr)
            Sum1.innerHTML=myArr[0]
        }else if(result[a] === "+"){
            myArr = myResult.split("!")
            myArr[1]=(Number(myArr[0])+Number(myArr[1]))
            myArr = myArr.slice(1)
            myResult = myArr.join("!")
            // console.log(myArr)
            Sum1.innerHTML=myArr[0]
        }else if(result[a] === "-"){
            myArr = myResult.split("!")
            myArr[1]=(Number(myArr[0])-Number(myArr[1]))
            myArr = myArr.slice(1)
            myResult = myArr.join("!")
            // console.log(myArr)
            Sum1.innerHTML=myArr[0]
        }
    }
}
    
function reset(){
    Sum1.innerHTML = ""
    Sum.innerHTML = ""
    // result = ""
}    
    

