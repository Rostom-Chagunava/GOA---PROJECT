const inp = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const div = document.getElementById("div")

const inp1 = document.getElementById("input1");
const addBtn1 = document.getElementById("addBtn1");
const div1 = document.getElementById("div1")

const taskList = document.getElementById("taskList");




class Text{
    static myArr = []
    constructor(text){
        this.text = text
        Text.myArr.push(this)
    }
}

class App{
    constructor(){
        addBtn.addEventListener("click",() => {
            const myText = new Text(inp.value)
            // console.log(Text.myArr)
            this.dysplay()
            inp.value = ""
        })
    }

    dysplay(){
        taskList.innerHTML = ""
        for(let i of Text.myArr){
            const li = document.createElement("li") 
            li.innerHTML = i.text
            li.classList.add("clas-of-lisst")
            const del = document.createElement("button")
            del.textContent = "X"
            li.appendChild(del)
            const edit = document.createElement("button")
            edit.textContent = "Edit"
            li.appendChild(edit)
            taskList.appendChild(li)
            del.addEventListener("click",() => this.remove(Text.myArr.indexOf(i)))
            edit.addEventListener("click", () => this.edit(Text.myArr.indexOf(i)))
            
        }

    }

    remove(index){
        Text.myArr.splice(index,1)
        this.dysplay()
        
    }

    edit(index){
        // inp1.value = Text.myArr[index].text
        div.style.display = "none"  
        div1.style.display = "block"
        addBtn1.addEventListener("click", () =>{
            Text.myArr[index].text = inp1.value 
            this.dysplay() 
            inp1.value = "" 
            div1.style.display = "none" 
            div.style.display = "block"
        })
    }

}



const test = new App()



// class Texts{
//     constructor(text){
//         this.text = text;
//     };
// };

// class App{
//     constructor(){
//         this.todoArray = [];
//         this.addBtn = document.getElementById("addBtn");
//         this.addBtn.addEventListener('click', () => this.addText());
//     }

//     addText(){
//         let pushText = inp.value;
//         const newText = new Texts(pushText);
//         this.todoArray.push(newText);
//         this.display();
//         inp.value = '';
//     }
//     display(){
//         taskList.innerHTML = '';
//         for(let item of this.todoArray){
//             const i = document.createElement('li');
//             i.textContent = item.text;

//             const btn = document.createElement('button');
//             btn.textContent = 'Remove';
//             btn.addEventListener('click', () => this.remove(this.todoArray.indexOf(item)));

//             const edit = document.createElement('button');
//             edit.textContent = 'Edit';
//             edit.addEventListener('click', () => this.edit(this.todoArray.indexOf(item)));

//             taskList.appendChild(i);
//             taskList.appendChild(btn);
//             taskList.appendChild(edit);

//         }
//     }

//     remove(index){
//         this.todoArray.splice(index, 1);
//         this.display();
//     }

//     edit(index){
//         let edited = prompt("Enter text: ");
//         const editInput = document.createElement('input');
//         taskList.appendChild(editInput);
//         for(let item of this.todoArray){
//             if(this.todoArray.indexOf(item) === index){
//                 item.text = editInput.value;
//             }
//         }
//         this.display();
//     }
// }

// const app = new App();