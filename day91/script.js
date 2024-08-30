
// // დაგვჭირდება ინფუთი და ღილაკი
// მომხმარებელი ინფუთიდან შემოიტანს რიცხვს, 
// მხოლოდ რიცხვი, შევქმანთ arrow ფუნქცია რომელშიც 
// ჩვენ გავიგებთ მომხმაებლის შერმოტანილი რიცხვი არის 
// თუ არა დადებითი და ასევე კენტია თუ ლუწი თუ 
// დადებითია და კენტია იქვე სადმე დაიწეროს რომმოხმარებლის 
// რიცხვი არის კენტი და არის დადებითი, თუ დადებითია და 
// ლუწია დაიწერო რომ დადებითია და ლუწია, 
// თუ უარყოფდითია და ლუწია დაიბეჭდოს ....

let Number1 = document.getElementById("input")
let text = document.getElementById("p")
let finalResult = ""

const funq = (number,numberType) => {
    number %2 == 0 ? finalResult = `თქვენი რიცხვი ${numberType} და ლუწია`  : finalResult = `თქვენი რიცხვი ${numberType} და კენტია`
    text.innerHTML = finalResult
}

const myFuction = (number) => {
    let myNumber = Number(number.value)
    myNumber > 0 ? funq(myNumber, "დადებითია") : funq(myNumber, "უარყოფითია")
}

    // if (myNumber > 0 ){
    //     text.innerHTML = "თქვენი რიცხი დადბითია!!"
    //     if (myNumber %2 == 0){
    //        text.innerHTML = "თქვენი რიცხი დადბითია და ლუწოა!!"
    //     }else{
    //         text.innerHTML = "თქვენი რიცხი დადბითია და კენტია!!"
    //     }
    // }else{
    //     text.innerHTML = "თქვენი რიცხი უარყოფითია!!"
    //     if (myNumber %2 !=0){
    //         text.innerHTML = "თქვენი რიცხვი უარყოფითია და კენტი"
    //     }else{
    //         text.innerHTML = "თქვენი რიცხვი უარყოფითია და ლუწია"
    //     }
    // }