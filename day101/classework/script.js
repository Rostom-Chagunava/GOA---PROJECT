

// const Name  = document.getElementById("name")
// const number  = document.getElementById("number")

// const btn = document.getElementById("btn")
// let conteinerDiv = document.getElementById("conteiner-div")



// let mymap = new Map()

// btn.addEventListener("click",() =>{
//     mymap.set(Name.value,number.value)
//     conteinerDiv.innerHTML = ""

//     for(let [k,v] of mymap.entries()){
//         let div = document.createElement("div")

//         div.textContent = `${k} - ${v}`
//         conteinerDiv.appendChild(div)

//     }

    

//     Name.value = ""
//     number.value = ""
//     console.log(mymap)
// })


// ) შექმენით set რომელშიც შემდეგ დაამატებთ ელემენტებს დაბეწავთ და შეამოწმებთ ამ სეტს, შეამოწმებთ ამ სეტში არი თუარა რაიმე ელემენტი, მიწვდებით თითოეულ მათგანს და დამეჭდავთ მათ ასევე ცალკე გამოიყენეთ values მეთოდი


// let mySet = new Set()

// mySet.add("user1")
// mySet.add("user2")
// mySet.add("user3")
// mySet.add("user4")
// mySet.add("user5")
// mySet.add([5,3,"l"])
// mySet.add({name:"otari",surnae:"otaraShvili"})

// let map = new Map([["name",52]])

// map.set(mySet)
    
// mySet.add(map)

// console.log(map)
// console.log(mySet)


// mySet.forEach((item) =>{
//     console.log(item)
// })

// console.log(mySet.has("user1"))

// for(let i of mySet.values()){
//     console.log(i)
// }

// console.log(mySet)

// Remove duplicates from an array: Create a set to store unique elements from an array

let myArr = [5,8,7,9,65,5,7,9]




let result = [...new Set(myArr)]

// for(let i of myArr){

//     if(!result.includes(i)){
//        result.push(i)
//     }
    
// }

console.log(result)

// Check if two sets are equal: Determine if two sets contain the same elements.

const set1 = new Set([5,8,7,8,5,4
])

const set2 = new Set([5,8,7,8,5,4,6
])




set1.size === set2.size ? console.log(`Both sets are equal in size`) : console.log(`Both sets are in different size`)
    


let set1Size = set1.size

console.log(set1Size)