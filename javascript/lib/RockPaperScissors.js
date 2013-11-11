function Player () {
  
}

Player.prototype.picks = function (pick) {
    this.pick = pick ;
  }

function Game (player1, player2) {
  this.player1 = player1
  this.player2 = player2

  this.PAIRS = {'rock': {'beats': 'scissors'},
                        'scissors': {'beats': 'paper'},
                        'paper': {'beats': 'rock'}
                      } ;
}

Game.prototype.winner = function (player1, player2) {

    if (this.samePick()){
      return null ;
    }
 
    if (this.PAIRS[this.player1.pick]['beats'] == this.player2.pick) {
     return this.player1;
    }  
    else {
      return this.player2 ;
    }
} 

Game.prototype.samePick = function () {
  return this.player1.pick == this.player2.pick ;
}


