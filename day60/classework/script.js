
let button = document.getElementById("menu")


let x = true


function Activ(){
    x = !x
    button.style.right = "100%"
}

function Default(){
    x = !x
    button.style.right = "0%"
}

function Menu(){
    if(x == true){
        Activ()
    }else{
        Default()
    }
}






// function Activ(){
//     x = !x
//     button.style.right = "0%"
// }


// function Menu(){
//     if (x == true){
//         Default()
//     }else{
//         Activ()
//     }
// }

