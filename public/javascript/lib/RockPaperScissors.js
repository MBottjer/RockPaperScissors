function Player () {
  
}

Player.prototype.picks = function (pick) {
    this.pick = pick ;
  }

function Game (player1, player2) {
  this.player1 = player1
  this.player2 = player2

  this.PAIRS = {'rock': {'beats': ['scissors', 'lizard'], 'verb': ['smashes', 'crushes']},
                'scissors': {'beats': ['paper', 'lizard'], 'verb': ['cuts', 'decapitates']}, 
                'paper': {'beats': ['rock', 'spock'], 'verb': ['suffocates', 'papercuts']},
                'spock': {'beats': ['scissors', 'rock'], 'verb': ['smashes', 'vaporizes']},
                'lizard': {'beats': ['paper', 'spock'], 'verb': ['eats', 'poisons']}
                } ;
}

Game.prototype.outcome = function (player1, player2) {

    if (this.samePick()){
      return null ;
    }
 
    if (this.PAIRS[this.player1.pick]['beats'].indexOf(this.player2.pick) != -1) {
     n = this.PAIRS[this.player1.pick]['beats'].indexOf(this.player2.pick);
     return this.player1.pick + " " + this.PAIRS[this.player1.pick]['verb'][n] + " " + this.player2.pick;
    }  
    else {
      x = this.PAIRS[this.player2.pick]['beats'].indexOf(this.player1.pick);
      return this.player2.pick + " " + this.PAIRS[this.player2.pick]['verb'][x] + " " + this.player1.pick;
    }
} 

Game.prototype.winner = function (player1, player2) {

    if (this.samePick()){
      return "It's a Draw!" ;
    }
 
    if (this.PAIRS[this.player1.pick]['beats'].indexOf(this.player2.pick) != -1) {
     return "You win!";
    }  
    else {
      return "The Computer wins!";
    }
} 

Game.prototype.samePick = function () {
  return this.player1.pick == this.player2.pick ;
}


