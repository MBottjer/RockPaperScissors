function Player () {
  
}

Player.prototype.picks = function (pick) {
    this.pick = pick ;
  }

function Game (player1, player2) {
  this.player1 = player1
  this.player2 = player2

  this.PAIRS = {'rock': {'beats': ['scissors', 'lizard']},
                'scissors': {'beats': ['paper', 'lizard']},
                'paper': {'beats': ['rock', 'spock']},
                'spock': {'beats': ['scissors', 'rock']},
                'lizard': {'beats': ['paper', 'spock']}
                } ;
}

Game.prototype.winner = function (player1, player2) {

    if (this.samePick()){
      return null ;
    }
 
    if (this.PAIRS[this.player1.pick]['beats'].indexOf(this.player2.pick) != -1) {
     return this.player1;
    }  
    else {
      return this.player2;
    }
} 

Game.prototype.samePick = function () {
  return this.player1.pick == this.player2.pick ;
}


