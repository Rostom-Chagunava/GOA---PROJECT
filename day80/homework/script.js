


let btn = document.getElementById("btn")

let on = false

btn.addEventListener("click", function(){
    on = !on;
    let saund = new Audio ("/saund/music.mp3");

    console.log(saund.play())
    if (on = true){
        saund.play = true
    }else{
        saund.play = false
    }
    // saund.play()
})

// function on (){
//     saund.play
// }