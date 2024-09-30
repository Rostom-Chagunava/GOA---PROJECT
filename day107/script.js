const inp = document.getElementById("inp");
const addBtn = document.getElementById("addBtn");
const updateBtn = document.getElementById("updateBtn");
const myUl = document.getElementById("myUl");

let inputValue = "";

inp.addEventListener("change", function(e){
  inputValue += e.target.value;
  console.log(inputValue)
  inp.value = "";
})

addBtn.addEventListener("click", function(){
  
  let li = document.createElement("li");
  myUl.appendChild(li);
  li.innerHTML = inputValue;

  inputValue = "";
  inp.value = "";
})



updateBtn.addEventListener("click", () =>{
  // console.log(date[1])

  for(let i of date){
    let ul = document.createElement("ul")
    ul.classList.add("stylelist")
    myUl.appendChild(ul);
    for(let x in i){
      let li = document.createElement("li");
      ul.appendChild(li)
      li.innerHTML = `${i[x]},`;
    }
    
  }

})




let date = []


function getdate(){
  
  let http  = new XMLHttpRequest()
  
  http.onreadystatechange = function(){

    // let date = JSON.parse(http.responseText)
    // console.log(date)
    // console.log(this.readyState)
    if(this.readyState == 4){
      if(this.status == 200){
        date = JSON.parse(http.responseText)
        // console.log(date[1])
      }
    }
  }
  
  
  http.open("GET","https://jsonplaceholder.typicode.com/todos",true)
  http.send()
  // return date


}


getdate()











// const myobj = {
//     "name": "rostomi",
//     "surname": "chagu"
// }




// let newobj = JSON.stringify(myobj)

// let newobj1 = JSON.parse(newobj)


// console.log(JSON)

// console.log(newobj)
// console.log(newobj1)