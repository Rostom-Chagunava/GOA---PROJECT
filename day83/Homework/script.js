function rps(p1, p2) {
  
    myObj = {
      scissors:"paper",
      rock:"scissors",
      paper:"rock"
    }
    
    if(myObj[p1] == p2){
      return "Player 1 won!"
    }else if(myObj[p2] == p1){
      return "Player 2 won!"
    }else{
      return "Draw!"
    }
  };
console.log(rps("paper","scissors"))  
 