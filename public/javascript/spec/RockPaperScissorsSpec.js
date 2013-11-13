describe("Rock-Paper-Scissors", function() {

  beforeEach(function() {

    computer = new Player();
    player = new Player();
    game = new Game(computer, player);

  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {

        computer.picks('rock');
        player.picks('scissors');
        expect(game.outcome()).toBe('rock smashes scissors');

      });

      it('when it beats scissors it says you win', function() {

        computer.picks('rock');
        player.picks('scissors');
        expect(game.winner()).toBe('You win!');

      });

      it('should beat lizard', function() {

        computer.picks('rock');
        player.picks('lizard');
        expect(game.outcome()).toBe('rock crushes lizard');
      });

      it('should lose to paper', function() {

        computer.picks('rock');
        player.picks('paper');
        expect(game.outcome()).toBe('paper suffocates rock');

      });

      it('should lose to paper', function() {

        computer.picks('rock');
        player.picks('paper');
        expect(game.winner()).toBe('You win!');

      });
      it('should beat rock', function() {

        computer.picks('paper');
        player.picks('rock');
        expect(game.winner()).toBe('The Computer wins!');

      });

      it('when the opponent also picks rock it says its a draw', function() {

        computer.picks('rock');
        player.picks('rock');
        expect(game.winner()).toBe('It\'s a Draw!');

      });

    });

    describe('paper', function() {

      it('should beat rock', function() {

        computer.picks('paper');
        player.picks('rock');
        expect(game.outcome()).toBe('paper suffocates rock');

      });

      it('should beat spock', function() {

        computer.picks('paper');
        player.picks('spock');
        expect(game.outcome()).toBe('paper papercuts spock');
      });

      it('should lose to scissors', function() {

        computer.picks('paper');
        player.picks('scissors');
        expect(game.outcome()).toBe('scissors cuts paper');

      });

    });

    describe('scissors', function() {

      it('should beat paper', function() {

        computer.picks('scissors');
        player.picks('paper');
        expect(game.outcome()).toBe('scissors cuts paper');

      });

      it('should beat lizard', function() {

        computer.picks('scissors');
        player.picks('lizard');
        expect(game.outcome()).toBe('scissors decapitates lizard');

      });

      it('should lose to rock', function() {

        computer.picks('scissors');
        player.picks('rock');
        expect(game.outcome()).toBe('rock smashes scissors');

      });

    });

    describe('spock', function() {

    it('should beat rock', function() {

        computer.picks('spock');
        player.picks('rock');
        expect(game.outcome()).toEqual('spock vaporizes rock');

    });

    it('should beat scissors', function() {

      computer.picks('spock');
      player.picks('scissors');
      expect(game.outcome()).toBe('spock smashes scissors');
    });

  });

  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no outcome', function() {

        var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
          computer.picks(x);
          player.picks(x);
          return game.outcome();
        });

        expect(drawGameResults).toEqual([null, null, null]);

      });

    });

  });

});