
// let myArr = ["ხაჭაპური","შქმერული","ხინკალი"]

// let newArr = [obj = {name:"otari",surname:"otaraSvili"},obj1 = {name:"giorgi",surname:"giorgadze"}]

// let myNumber = [5,6,9,5,4,21,5,2]

// myArr.map((itam,index)=>{
//     console.log(`${index} ${itam}`)
// })

// const result = newArr.map((item,index) =>{
//     return item
// })


// const myFunqtiin = (item,index,arr) =>{

//     return item.name
//     console.log(item.name)
//     console.log(index)
// }


// console.log(result[0].name)


// myArr.forEach((item,index,x) =>{
//     console.log(`${item} ${index}`)
//     console.log(index)
//     console.log(x)
// })

// let newarr = myArr.map((item,index) =>{
//     return `${item} ${index} `
// })

// console.log(result[1])


// const myMap = (myArr) =>{
//     let item = []
//     for (let i of myArr){
//         item.push(`${myArr.indexOf(i)} ${i}`)
//     }
//     return item
// }

// console.log(myMap(myArr))


// let myArr1 = [10,32,5,89,45,56]

// let myndex = 0


// index = 0

// let result = myArr1.filter((element,index) =>{

//     return element %2 == 0
// })

// console.log(result)


// let result1 = []

// for (let i of myArr1){
//     if(i %5 == 0){
//         result1.push(i)
//     }
// }

// console.log(result1)



// let myArr = ["ხაჭაპური","შქმერული","ხინკალი"]

// let result = myArr.find((item) =>{
//     return item == "ხინკალი"
// })
// let result1 = myArr.findIndex ((item) =>{
//     return item == "ხინკალი"
// })


// console.log(result1)
// console.log(result)


// console.log(result)
// let myArr = ["ხაჭაპური","შქმერული","ხინკალი"]



// let result2 = []

// const filter = (myArr) =>{
//     let result1 
//     for (let i of myArr){
//         result1 = i
//         if(i === "ხინკალი"){break;}
            
        
//     }
//     return result1
// }




// for (let i of myArr){
//     if(i === "ხინკალი"){
//         result2.push(myArr.indexOf(i))
//     }
// }

// console.log(result1)
// console.log(result2)


// let myobj = [{nane:"otari",age:25},{name:"giorgi",age:20},{name:"sandro",age:18}]

// let myArr1 = [1,2,3,4]

// let result = myArr1.reduce((atribut,atribut2) =>{

    
//     return atribut + atribut2

// })


// console.log(result)



// Given an array of numbers, return a new array where only the odd numbers are doubled
let myarr = [{name:"giorgi"},{name:"otari"},{name:"merabi"}]

let arr = []


for(let i =0;i<myarr.length;i++){
    if(myarr[i].name != "giorgi"){
        arr.push(myarr[i])
    }
}

console.log(arr)
// let myArr1 = [1,2,3,4,55,48,662,58]

// const result = myArr1.filter((item) => {
//     return  (item %2 == 0) 
// })

// const result1 = result.map((elemnt) =>{
//     return elemnt * 2
// })
// console.log(result1)
