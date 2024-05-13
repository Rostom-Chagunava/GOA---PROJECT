
let hexCode = document.getElementById("h2")
let main = document.getElementsByTagName("main")
let header = document.getElementsByTagName("header")

function colorChange(){
    const colorName = ["0","2","3","4","5","6","7","8","9","A","B",
    "C","D","E","F"]

    let color = "#"

    for(let i = 0;i < 6;i++){
        let randomNamber = Math.floor(Math.random() * colorName.length)
        color += colorName[randomNamber] 
    }


    hexCode.innerHTML = color
    main[0].style.backgroundColor = color
    header[0].style.boxShadow = "0px 0px 20px" + color
    hexCode.style.color = color

}