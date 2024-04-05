// HomeWork 1:  1) მოხმარებელი შემოიტანს რიცხვს, თუ ის იქნება უარყოფითი რიცხვი უნდა დაგვიბრუნოს უარყოფითი რიცხვი, 
// თუ ის იქნება დადებითი რიცხვი დაგვიბრუნოს უარყოფითი რიცხვი, ყველა შემთხვევაში გვიბრუნებს უარყოფით რიცხვს გარდა ნულისა


// let number = prompt("enter your Namber:")

// if (number > 0){
//     console.log(number * -1)
// }else{
//     console.log(number)
// }

// HomeWork 2: მომხამრებელს შემოატანინეთ რიცხვი შემდეგ კი დაბეჭდეთ მომხმარებლის შემოტანილ რიცხვამდე ყველა რიცხვის ჯამი

let number1 = prompt ("Enter Your Name:")

let i = 0

let sum = 0

// if (number1 > 0){
//     for (i; i <= number1; i ++ ){
//         sum +=i
//     }
// }else{
//     for (i; i >= number1;i -- ){
//         sum += i
//     }
// }

if (number1 >0 ){
    while ( i <= number1){
        sum += i
        i ++
    }
}else{
    while(i >= number1){
        sum += i
        i -- 
    }
}

console.log(sum)


function sum1(){
    
}

