

class Person {

    static myArr = []

    constructor(Name,Text){
        this.Name = Name,
        this.Text = Text,
        Person.myArr.push(this)
    }

    static createDiv (namevalue,textvalue,index){
        const user = new Person(namevalue,textvalue)

        let div = document.createElement("div")
        div.classList.add("newdiv")
        let p = document.createElement("p")
        p.classList.add
        let spanName = document.createElement("span")
        spanName.classList.add("name")
        let spanText = document.createElement("span")
        spanText.classList.add("text")
        let h4 = document.createElement("h4")
        h4.classList.add("delete")
        // let hr = document.createElement("hr")
        // hr.classList.add("hr")

        // console.log(Person.myArr.length)
        // console.log(index)
        spanName.innerHTML = Person.myArr[index].Name + " " + ":"
        spanText.innerHTML = Person.myArr[index].Text
        h4.innerHTML = "x"
        
        p.appendChild(spanName)
        p.appendChild(spanText)
        div.appendChild(p)
        div.appendChild(h4)
        contaner[0].appendChild(div)

        let del1 = document.getElementsByClassName("delete")
        // console.log(del1[0].innerHTML)

        for(let i =0;i < del1.length;i++){
            del1[i].addEventListener("click", () =>{
                // console.log(Person.myArr.length)
                // console.log(del1[i].parentElement)
                // console.log(i)
                Person.myArr.splice(i,1)
                console.log(Person.myArr)
                if(Person.myArr.length == 0){
                    index = 0
                }else{
                    index ++ 
                }
            })
        }

        h4.addEventListener("click",function(){
            console.log(h4.parentElement)
            contaner[0].removeChild(h4.parentElement)
            // console.log(Person.myArr.length)
            // for(let i =0;i < del1.length;i++){
            //     del1[i].addEventListener("click", () =>{
            //         console.log("hi")
            //         console.log(del1[i].parentElement)
            //         // Person.myArr.splice(i-1,1)
            //         // console.log(Person.myArr)
            //         // console.log(i)
            //     })
                // console.log(Person.myArr)
               
            // }
            console.log(Person.myArr.length)
        })
        
        // namevalue = ""
        // textvalue = ""
    }
}



let namevalue = document.getElementById("namevalue")
let textvalue = document.getElementById("textvalue")
let contaner = document.getElementsByClassName("contaner")

let button = document.getElementById("btn")

let index = 0
button.addEventListener("click", () =>{
    Person.createDiv(namevalue.value,textvalue.value,index)
    namevalue.value = ""
    textvalue.value = ""
})