let p = document.getElementsByClassName("p")
let btn = document.getElementById("btn")
let btn1 = document.getElementById("btn1")



let isTrue = true

let myAudio = new Audio("/saund/mymusic.mp3")


btn.addEventListener("click",function(){
    myAudio.play(); 
})


// btn.addEventListener("click",function(){
//     myAudio.pause();
// })
btn1.addEventListener("click",function(){
    myAudio.pause(); 
})

for(let i =0;i <p.length;i++){
    p[i].addEventListener("click", function(){
        saund(p[i].innerHTML)
    })
}

document.addEventListener("keypress",function(event){
    saund(event.key)
})


// ---------------------------//////////////////////
function saund(x){
    
    switch(x){
        case "w":
            let saund1 = new Audio("/saund/crash.mp3")
            saund1.play()
            isTrue = !isTrue
            if(isTrue == false){
                p[0].style.animationName = "opacity"
                p[0].style.animationDuration = "2s"
                p[0].style.animationIterationCount = "1" 
            }else{
                p[0].style.animationName = "opacity1"
                p[0].style.animationDuration = "2s"
                p[0].style.animationIterationCount = "1" 
            }
            break
        case "a":
            let saund2 = new Audio("/saund/snare.mp3")
            saund2.play()
            isTrue = !isTrue
            if(isTrue == false){
                p[1].style.animationName = "opacity"
                p[1].style.animationDuration = "2s"
                p[1].style.animationIterationCount = "1" 
            }else{
                p[1].style.animationName = "opacity1"
                p[1].style.animationDuration = "2s"
                p[1].style.animationIterationCount = "1" 
            }
            break  
        case "s":
            let saund3 = new Audio("/saund/tom-1.mp3")
            saund3.play()
            isTrue = !isTrue
            if(isTrue == false){
                p[2].style.animationName = "opacity"
                p[2].style.animationDuration = "2s"
                p[2].style.animationIterationCount = "1" 
            }else{
                p[2].style.animationName = "opacity1"
                p[2].style.animationDuration = "2s"
                p[2].style.animationIterationCount = "1" 
            }
            break  
        case "d":
            let saund4 = new Audio("/saund/tom-2.mp3")
            saund4.play()
            isTrue = !isTrue
            if(isTrue == false){
                p[3].style.animationName = "opacity"
                p[3].style.animationDuration = "2s"
                p[3].style.animationIterationCount = "1" 
            }else{
                p[3].style.animationName = "opacity1"
                p[3].style.animationDuration = "2s"
                p[3].style.animationIterationCount = "1" 
            }
            break
        case "j":
            let saund5 = new Audio("/saund/tom-3.mp3")
            saund5.play()
            isTrue = !isTrue
            if(isTrue == false){
                p[4].style.animationName = "opacity"
                p[4].style.animationDuration = "2s"
                p[4].style.animationIterationCount = "1" 
            }else{
                p[4].style.animationName = "opacity1"
                p[4].style.animationDuration = "2s"
                p[4].style.animationIterationCount = "1" 
            }
            break
        case "k":
            let saund6 = new Audio("/saund/tom-4.mp3")
            saund6.play()
            isTrue = !isTrue
            if(isTrue == false){
                p[5].style.animationName = "opacity"
                p[5].style.animationDuration = "2s"
                p[5].style.animationIterationCount = "1" 
            }else{
                p[5].style.animationName = "opacity1"
                p[5].style.animationDuration = "2s"
                p[5].style.animationIterationCount = "1" 
            }
            break
        case "l":
            let saund7 = new Audio("/saund/tom-2.mp3")
            saund7.play()
            isTrue = !isTrue
            if(isTrue == false){
                p[6].style.animationName = "opacity"
                p[6].style.animationDuration = "2s"
                p[6].style.animationIterationCount = "1" 
            }else{
                p[6].style.animationName = "opacity1"
                p[6].style.animationDuration = "2s"
                p[6].style.animationIterationCount = "1" 
            }
            break 
    }
}   