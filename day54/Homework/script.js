
// HomeWork 1:  1) მოხმარებელი შემოიტანს რიცხვს, თუ ის იქნება უარყოფითი რიცხვი უნდა დაგვიბრუნოს უარყოფითი რიცხვი, 
// თუ ის იქნება დადებითი რიცხვი დაგვიბრუნოს უარყოფითი რიცხვი, ყველა შემთხვევაში გვიბრუნებს უარყოფით რიცხვს გარდა ნულისა

// let number = prompt ("Enter your Nmaber:")

// if (number < 0){
//     console.log(number)
// }else if(number == 0){
//     console.log(0)
// }else{
//     console.log(number * -1)
// }

// HomeWork 2: მომხამრებელს შემოატანინეთ რიცხვი შემდეგ კი დაბეჭდეთ მომხმარებლის შემოტანილ რიცხვამდე ყველა რიცხვის ჯამი

let number = prompt ("Enter Your Namber:")

sum = 0

for (let i =0 ; i <= number; i ++){
    sum += 1
}


// if (number > 0){
//     for ( let i =0; i <= number; i+=1){
//         sum += i
//     }
// }else if(number < 0){
//     for ( let i =0; i <= number; i-=1){
//         sum += i
//     }
// }

// for ( let i =0; i <= number; i+=1){
//     if (number > 0){
//         sum += i 
//     }else if(number < 0){
//         sum -= i
//     }
// }
console.log("Sum:",sum)