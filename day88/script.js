
// const mult = (num1 = 1,num2 = 1) => {
//     return num1 * num2
// } 
// const divis = (num1 = 1,num2 = 1) =>{
//     return num1 / num2
// }
 
// const plus = (num1 = 1,num2 = 1) =>{
//     return num1 + num2
// }
// const minus = (num1 = 1,num2 = 1) =>{
//     return num1 - num2
// }

// const calculator = (nu1,nu2,operator,Mult = mult,Divis = divis,Plus = plus,Minus = minus) => {
//     if (operator == "/"){
//         return Divis(nu1,nu2)
//     }else if(operator == "*"){
//         return Mult(nu1,nu2)
//     }else if(operator == "+"){
//         return Plus(nu1,nu2)
//     }else if(operator == "-"){
//         return Minus(nu1,nu2)
//     }
// }
// console.log(calculator(5,2,"+"))

// =======>///////
// const  myCulculator = (n1,n2,oprator,
//     mult = (num1,num2) => {return num1 * num2},
//     divis = (num1,num2) => {return num1 / num2},
//     plus = (num1,num2) => {return num1 + num2},
//     minus = (num1,num2) => {return num1 + num2}) => {
//     if (oprator == "*"){
//         return mult(n1,n2)
//     }else if (oprator == "/"){
//         return  divis(n1,n2)
//     }else if(oprator == "+"){
//         return  plus(n1,n2)
//     }else if(oprator == "-"){
//         return minus(n1,n2)
//     }
// } 


// console.log(myCulculator(2,5,"*"))
// */*/*/*/*/*/*/*/**//*/*/*/*/*/*/*/**/*/*/*/*/*/ */ */

// let operator = "+"

// const calculator = (n,n1) => {
//     let myObj = {
//         "*": mult(n,n1),
//         "/": divis(n,n1),
//         "+": plus(n,n1),
//         "-": minus(n,n1)
//     }

//     return myObj
// }

// console.log(calculator(5,2)[operator])


// *-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-**-*-*-
const calculator = (num1,num2,operator,
    mult = (n1,n2) => {return n1 * n2},
    divis = (n1,n2) => {return n1 / n2},
    plus = (n1,n2) => {return n1 + n2},
    minus = (n1,n2) => {return n1 - n2},
) =>{

    if (operator == "*"){
        return mult(num1,num2)
    }else if (operator == "/"){
        return divis(num1,num2)
    }else if (operator == "+"){
        return plus(num1,num2)
    }else if(operator == "-"){
        return minus(num1,num2)
    }

}

console.log(calculator(2,5,"*"))



///////+/+/+/+/+/+/+/+/+/+/+/+/+/+/+/+/+

