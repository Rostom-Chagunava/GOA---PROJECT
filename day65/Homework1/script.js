let  myArr = ["https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=800",
"https://cdn.georgiantravelguide.com/storage/thumbnails/dji-0334-2.jpg","https://cdnn1.img.sputnik-georgia.com/img/24161/76/241617658_218:269:1081:916_1920x0_80_0_0_9247dec838d6af62af55e40461cd6936.jpg",
"https://cdn.georgiantravelguide.com/storage/files/okatses-chanchkeri-kinchkha-okatses-kanioni-samegrelo-waterfall-canyon-3.jpg"]

let image1 = document.getElementById("image")
let image2 = document.getElementById("image1")

let scor = document.getElementById("Score")

sum = 0
console.log(sum)
function randomImage(){
    let num1 = Math.floor(Math.random()* myArr.length)
    let num2 = Math.floor(Math.random()* myArr.length)

    image1.src = myArr[num1]
    image2.src = myArr[num2]

    

    if(num1 === num2){
        sum +=1
    }else{
        sum +=0
    }
    
    scor.innerHTML = sum
}

