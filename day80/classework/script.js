
let myText = document.getElementById("mytext")
let p = document.getElementById("p")
console.log(p.innerHTML)

let result = ""
let br = ""
// let underline = ""
// let underline1 = ""
// let num = 1

let bool = true
function cursor(){
    bool = !bool
    if(bool == true){
        p.style.opacity = 0
    }else{
        p.style.opacity = 1
    }
    
}
setInterval(cursor,500)

document.addEventListener("keypress",function(event){
    console.log(event.key)
   
    if(event.key == "="){
        result = result.slice(0,-1)
    }else if(event.key == "Enter"){
       result += "<br>"
    }else if(event.key == " "){
        result += "  "
    }else{
        result += event.key
    }
    myText.innerHTML = result
})