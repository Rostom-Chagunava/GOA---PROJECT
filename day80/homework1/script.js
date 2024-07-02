let div = document.getElementById("child")
let hotizont = 220
let vertikal = 220
document.addEventListener("keypress", function(event){
    console.log(event.key)
    if(event.key == "s"){
        if(hotizont >= 440){
            hotizont == 440
        }else{
            hotizont += 5
        }
        div.style.top = hotizont + "px"
    }else if(event.key == "w"){
        if(hotizont <= 0){
            hotizont == 0
        }else{
            hotizont -= 5
        }
        div.style.top = hotizont + "px"
    }else if(event.key == "d"){
        if(vertikal >= 440){
            vertikal == 440
        }else{
            vertikal += 5
        }
        div.style.left = vertikal + "px"
    }else if(event.key == "a"){
        if(vertikal <=0){
            vertikal == 0
        }else{
            vertikal -= 5
        }
        div.style.left = vertikal + "px"
    }  
//     else if(event.key = "q"){
//         hotizont +=1
//         console.log( hotizont)

//         div.style.transform = `translateY(${hotizont + "px"})`
//     }
})