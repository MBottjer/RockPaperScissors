function Player () {
  
}

Player.prototype.picks = function (pick) {
    this.pick = pick ;
  }

function Game (computer, player) {
  this.computer = computer
  this.player = player

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
 
    if (this.PAIRS[this.computer.pick]['beats'].indexOf(this.player.pick) != -1) {
     n = this.PAIRS[this.computer.pick]['beats'].indexOf(this.player.pick);
     return this.computer.pick + " " + this.PAIRS[this.computer.pick]['verb'][n] + " " + this.player.pick;
    }  
    else {
      x = this.PAIRS[this.player.pick]['beats'].indexOf(this.computer.pick);
      return this.player.pick + " " + this.PAIRS[this.player.pick]['verb'][x] + " " + this.computer.pick;
    }
} 

Game.prototype.winner = function (computer, player) {

    if (this.samePick()){
      return "It's a Draw!" ;
    }
 
    if (this.PAIRS[this.computer.pick]['beats'].indexOf(this.player.pick) != -1) {
     return "The Computer wins!";
    }  
    else {
      return "You win!";
    }
} 

Game.prototype.samePick = function () {
  return this.computer.pick == this.player.pick ;
}

Game.prototype.randomGenerator = function () {
  var options = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
  return options[Math.floor(Math.random()*options.length)];
}




