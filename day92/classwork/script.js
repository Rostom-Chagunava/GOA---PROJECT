// let myArr = ["otari","giorgi","malxazi"]

// let [name1,name2,name3] = myArr

// // console.log(name2)


// let myObj = {
//     name: "otari",
//     work: "developer",
//     age: "25",
//     myfunq: function(w){
//         myObj.age = w
//         return myObj.age
//     }
// }


// let {name,work,age,myfunq} = myObj

// myfunq(2)
// // console.log(work)

// let arr1 = [1,2,5,6,9,88,7,8,5]

// let arr = [
//    {
//     name: "otari",
//     surname: "otar1"
//    },
//    {
//     name: "giorgi",
//     surname: "otar2"
//    },
//    {
//     name: "shalva",
//     surname: "otar3"
//    }
// ]


// const [objk1,objk2,objk3] = arr

// const [person1,,person3] = arr

// const [n1,n2] = arr1

// console.log(person1)


// console.log(n2)

// const {name:name1,surname:surname1} = person1

// const {name:name2,surname:surname2} = person1

// const {name:name3,surname:surname3} = person1

// console.log(name1,surname1)

// const {name,surname} = arr[0]

// console.log(name)




const calculate = (a,b) => {
   const add = a + b
   const sub = a - b
   const str = "hi"
   return [add,sub,str] 
}

const [add1,sub2,str1] = calculate(4,5)
// console.log(sub2)
// console.log(calculate(5,2))

let myObj = {
   name: "volga",
   color: "black",
   year:"1985",
   typeOfcar: "supercar",
   plase :{
      city : "khutaisi",
      wilage: "dffdfdddf"
   }
}



const myfunq = ({name,color,plase:{city}}) =>{
   console.log("my car" + " " + name + " " + "is" +  " " + color + " " + city)
}


myfunq(myObj)
// myfunq()
// const {name} = myObj