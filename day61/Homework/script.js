let minut = document.getElementById("minut")

let hour = document.getElementById("hour")

let day = document.getElementById("day")

let box = document.getElementById("container")

let numberOfminut = 0

let numberOfhour = 0

let numberOfday = 0


function psul(){
    numberOfminut +=1
    minut.innerHTML = numberOfminut
    box.style.boxShadow = "0 0 10px  #146a20"
    Hour()
    Day()
}

function minus(){
    numberOfminut -=1
    minut.innerHTML = numberOfminut
    box.style.boxShadow = "0 0 10px  red"
    Hour()
    Day()
}

function reset(){
    numberOfminut = 0
    numberOfhour = 0
    numberOfday = 0
    minut.innerHTML = numberOfminut
    hour.innerHTML = numberOfhour
    day.innerHTML = numberOfday
    box.style.boxShadow = "0 0 10px  rebeccapurple"
    Hour()
    Day()
}

function Hour(){
    if(numberOfminut  == 60){
        numberOfminut =0
        numberOfhour += 1
        hour.innerHTML = numberOfhour
    }else if(numberOfminut  == -60){
        numberOfminut =0
        numberOfhour -= 1
        hour.innerHTML = numberOfhour}
}

function Day(){
    if(numberOfhour == 24){
        numberOfhour =0
        numberOfday += 1
        day.innerHTML = numberOfday
    }else if(numberOfhour == -24){
        numberOfhour =0
        numberOfday -= 1
        day.innerHTML = numberOfday}
}
