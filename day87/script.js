let myArr = ["Ana","Nino","Rostom","amirani"]



// const sortName = (x) => {
//     result = []
//     for(let i of x){
//         if (i[0] === "A" || i[0] === "a"){
//             result.push(i)
//         }
//     }
//     return result
// }

// console.log(sortName(myArr)) 

// const sort = (x) =>{
//     result = []
//     x.forEach ((i) =>{
//         if(i[0] == "a" || i[0] == "A"){
//             result.push(i)
//         }
//     })
//     return result
// }


// myArr.forEach((i,y,k) =>{
//     console.log([y])
// })

// 

// console.log(sort (myArr))


// 

const myFunction = (y) =>{
   let result = ""

   for (let i of y){
    result += i + "/"
   }
   return result
}



const fib = (x) => {
    var arr = [0,1]
    for(let i = 2;i < x; i++){
        arr.push(arr[i-1] + arr[i-2])
    }
    return myFunction(arr)
}

console.log(fib(10))