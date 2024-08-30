
// const myFunction = (...Name) => {
//     const arr = [...Name]
//     console.log(arr)
// }


// myFunction("otari","giorgi","shalva")


// const myArr = [5,6,4,5,8,6]

// const newArr = [...myArr,58,84,63,22,4115]

// console.log(newArr)


// const obj ={
//     name: "giorgi",
//     age: "25"
// }

// const myObj = {
//     ...obj, surname: "giorgidze"
// }

// console.log(myObj)

const sec = document.getElementsByTagName("section")

const addText = () =>{
    let newP = document.createElement("p")
    newP.textContent = "hi"
    sec[0].appendChild(newP)
}
const removeText = () =>{
    sec[0].removeChild(sec[0].querySelector("p"))
}


myarr = []
let c = 0
let btn = document.getElementsByTagName("button")

btn[0].addEventListener("click", () =>{
    myFunction()
    addText()
})

btn[1].addEventListener("click", () =>{
    myFunctionremove()
    removeText()
})

const myFunction = () =>{
        c++
        let arr = []
        arr.push(c)
        myarr = [...myarr,...arr]
        console.log(myarr)
        
}


const myFunctionremove = () =>{
        // c++
        // let arr = []
        // myarr = [...myarr,...arr]
        
        myarr.pop()
        // myarr.shift()
        console.log(myarr)
        
}
// console.log()    







