function rpsls(pl1,pl2){
  
    let myObj = {
      Scissors:["Paper","Lizard"],
      Paper:["Rock","Spock"],
      Rock:["Lizard","Spock"],
      Lizard:["Spock","Paper"],
      Spock:["Scissors","Rock"],
    }
    
    if(myObj[pl1][0] == pl2 || myObj[pl1][1] == pl2) {
      return "Player 1 Won!"
    }else if(myObj[pl2][0] == pl1 || myObj[pl2][1] == pl1) {
      return "Player 2 Won!"
    }else{
      return "Draw!"
    }
  
  
  }

  
console.log(rpsls("Spock","Spock"))  