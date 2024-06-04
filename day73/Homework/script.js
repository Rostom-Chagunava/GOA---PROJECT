let Name = document.getElementById("name")
let image = document.getElementById("image")
let Abaut = document.getElementById("abaut")
let rightButtun = document.getElementById("btn-right")
let leftButtun = document.getElementById("btn-left")

let myArr = []

function personalDate(userName,userImage,abautUser){
    this.userName = userName;
    this.userImage = userImage;
    this.abautUser = abautUser;
}

const person1 = new personalDate("person1,","/image/person1.jpg","Lorem ipsum dolor sit amet consectetur adipisicingelit.Sunt rem dignissimos architecto distinctio dolor fugia1")
const person2 = new personalDate("person2,","/image/person.2.png","Lorem ipsum dolor sit amet consectetur adipisicingelit.Sunt rem dignissimos architecto distinctio dolor fugia2")
const person3 = new personalDate("person3,","/image/person3.png","Lorem ipsum dolor sit amet consectetur adipisicingelit.Sunt rem dignissimos architecto distinctio dolor fugia3")

myArr.push(person1)
myArr.push(person2)
myArr.push(person3)

let i = 0

rightButtun.addEventListener("click", function(){
    i++
    if(i > myArr.length-1){
        i = 0;
    }
    
    Name.innerHTML = myArr[i].userName;
    image.src = myArr[i].userImage;
    Abaut.innerHTML = myArr[i].abautUser;
})

leftButtun.addEventListener("click",function(){
    i--
    if(i < 0){
        i = myArr.length-1;
    }
    
    Name.innerHTML = myArr[i].userName;
    image.src = myArr[i].userImage;
    Abaut.innerHTML = myArr[i].abautUser;

})



