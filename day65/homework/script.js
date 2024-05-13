let  myArr = ["https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=800",
"https://cdn.georgiantravelguide.com/storage/thumbnails/dji-0334-2.jpg","https://cdnn1.img.sputnik-georgia.com/img/24161/76/241617658_218:269:1081:916_1920x0_80_0_0_9247dec838d6af62af55e40461cd6936.jpg",
"https://cdn.georgiantravelguide.com/storage/files/okatses-chanchkeri-kinchkha-okatses-kanioni-samegrelo-waterfall-canyon-3.jpg"]

let img = document.getElementById("img")

let num = -1

function next(){
    num += 1
    img.src = myArr[num]
    

    if(num > myArr.length - 1){
        num = -1
    }
    console.log(num)

}

function back(){
    num -= 1
    if(num < 0){
        num = myArr.length-1
    }
    console.log(num)
    img.src = myArr[num]
}   

