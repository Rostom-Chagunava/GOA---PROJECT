
// let  myArr = [1,2,5,4,8,6,9,8,7,8]

// let  myArr1 = [1,2,5,4,8,6,9,8,7,8,45,5]

// let result = 0
// let result1 = 0

// function caunt(x){
//     for (let i of x){
//         result1 += i
//     }
// }

// function caunt1(x){
//     for (let i in x){
//         result += x[i] 
//     }
// }

// const caunt2 = (x) => {
//     let myresult = 0
//     for (let i of x){
//         myresult += i
//     }
//     return myresult
// }


// console.log(caunt2(myArr))



// const caunt3 = (x) =>{ for (let i in x){result += x[i]}}

// caunt3(myArr1)




// console.log(result1)
// console.log(result)
// for (let i in myArr){
//     result1 += myArr[i]
// }

// console.log(result)
///*//*/*/*/*/*/*/*/*/**/*/*/**/*//*/* */ */


// const sayhi = (name,surnane) => {
//     return `hi ${name} ${surnane}`
// }



// console.log(sayhi("rosotm","chagunava"))




// შევქვნატ ფუნქცია რომელსაც გადაეცემა სია და დაგვიბრუნებს ამ სიაში ყველაზე დიდი ელემენტს




// let arr = [2,5,6,8,9,4,4,5,9,25]


// const max = (x) => {

//     for (var i in x){
//         if(arr[0] >  arr[i]){
//             arr[i] = arr[0]
//         }
//     }
//     return arr[i]
// }

// console.log(max(arr))


// შექმენით ფუნქცია რომელსაც გადაეცემა ობიექტის სახელი,ასაკი, საცხოვრებელი ადგილი.
// დავბეჭდოთ თიტეული ობიქექტის სახელი ასაკი და საცხოვრებელი ადგილი



// let pesron1 = {
//     name: "Rostom",
//     surname: "Chagunava",
//     plase: "xoni"
// }


// const about = (x) =>{

//     for (let key in x){
//         console.log(`${key}: ${pesron1[key]}`)
//     }
// }

// about(pesron1)


// const myObj = {
//     name: "rostom",
//     surNmar: "Chagu",
//     age: 30,
// }




// const myFunq = (x) => {
    
//     let result = ""
//     for (let i in x){

//         result += `${i}:${myObj[i]}` + "  "
//     }
//     return result
// }


// console.log(myFunq(myObj))

// *******************************//////////////
// შევქვნათ ფუნქცია რომელსაც გადაეცემა რიცხვებით სავსე სია, გავარკვიოთ არის თუ არა ამ სიაში ყველა ელემენტი კენტი, თუ არიძ 
// გამოიტანოს True თუ არა Folse.



// let myArr = [5,3,7,13] 


// const findOdd = (x) => {
//     result = false
//     for (let i of x){
//         if (i %2 !=0){
//             result = true
//         }else{
//             result = false
//         }
//     }
//     return result
// }

// console.log(findOdd(myArr))

