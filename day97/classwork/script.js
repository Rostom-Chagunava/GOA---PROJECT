class Humen {
    constructor(name,gender){
        this.name = name,
        this.gender = gender
    }
}

class Men extends Humen{
    constructor(name,gender,height){
        super(name,gender)
        this.height = height
    }

}

class Women extends Humen {
    constructor (name,gender,height){
        super(name,gender)
        this.height = height
    }
}


// const Humen1 = new Humen("humen","")

const men = new Men ("tom","menlich","1.85")

console.log(men)