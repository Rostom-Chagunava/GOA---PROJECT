const inp = document.getElementById("inp");
const addBtn = document.getElementById("addBtn");
const updateBtn = document.getElementById("updateBtn");
const myUl = document.getElementById("myUl");

const check = document.getElementsByClassName("check")

let inputValue = "";

inp.addEventListener("input", function(e){
  inputValue = e.target.value;
//   console.log(inputValue)
//   inp.value = "";
})

addBtn.addEventListener("click", function(){
    let li = document.createElement("li");
    let Text = document.createTextNode(inputValue);
    li.appendChild(Text);
    myUl.appendChild(li)
    inp.value = "";

})

const display1 = (id,text) =>{
    let li = document.createElement("li");
    let p = document.createElement("p")
    
    p.innerHTML = "uncompleted"
    p.classList.add("complit1")
    let Text = document.createTextNode(text);
    li.id = id;
    li.appendChild(Text);
    // li.style.textDecoration = "underline"
    li.appendChild(p);
    li.classList.add("li-flex1")
    myUl.appendChild(li)
    // myUl.appendChild(check)
    inp.value = "";
}

const display = (id,text) =>{
    let li = document.createElement("li");
    let p = document.createElement("p")
    
    p.innerHTML = "completed"
    p.classList.add("complit")
    let Text = document.createTextNode(text);
    li.id = id;
    li.appendChild(Text);
    // li.style.textDecoration = "underline"
    li.appendChild(p);
    li.classList.add("li-flex")
    myUl.appendChild(li)
    // myUl.appendChild(check)

    inp.value = "";
}



// function addDate(){
//     let http = new XMLHttpRequest()
//     http.onreadystatechange = function (){
//         if(this.readyState == 4){
//             if(this.status == 201){
//                 let date = JSON.parse(http.responseText)

//                 display(date.id,inputValue)
//                 // console.log(date)
//             }
//         }
//     }
//     http.open("POST","https://jsonplaceholder.typicode.com/todos");
//     let myObj =JSON.stringify({
//         "user": 1,
//         "id": 201,
//         "titel": "inputValue"
//     })

//     http.send(myObj)

// }

// addDate()

// updateBtn.addEventListener("click", addDate)


function getdate(){
    let http  = new XMLHttpRequest()
    http.onreadystatechange = function(){
      if(this.readyState == 4){
        if(this.status == 200){
          let date = JSON.parse(http.responseText)
          date.forEach(element => {
            element.completed == true? display(element.id,element.title) : display1(element.id,element.title)
              
          });
        }
      }
    }
    
    http.open("GET","https://jsonplaceholder.typicode.com/todos",true)
    http.send()
  }
  
  getdate()

// getdate()