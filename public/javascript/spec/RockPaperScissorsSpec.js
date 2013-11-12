describe("Rock-Paper-Scissors", function() {

  beforeEach(function() {

    player1 = new Player();
    player2 = new Player();
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.outcome()).toBe('rock smashes scissors');

      });

      it('when it beats scissors it says you win', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe('You win!');

      });

      it('should beat lizard', function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.outcome()).toBe('rock crushes lizard');
      });

      it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.outcome()).toBe('paper suffocates rock');

      });

      it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe('The Computer wins!');

      });

      it('when the opponent also picks rock it says its a draw', function() {

        player1.picks('rock');
        player2.picks('rock');
        expect(game.winner()).toBe('It\'s a Draw!');

      });

    });

    describe('paper', function() {

      it('should beat rock', function() {

        player1.picks('paper');
        player2.picks('rock');
        expect(game.outcome()).toBe('paper suffocates rock');

      });

      it('should beat spock', function() {

        player1.picks('paper');
        player2.picks('spock');
        expect(game.outcome()).toBe('paper papercuts spock');
      });

      it('should lose to scissors', function() {

        player1.picks('paper');
        player2.picks('scissors');
        expect(game.outcome()).toBe('scissors cuts paper');

      });

    });

    describe('scissors', function() {

      it('should beat paper', function() {

        player1.picks('scissors');
        player2.picks('paper');
        expect(game.outcome()).toBe('scissors cuts paper');

      });

      it('should beat lizard', function() {

        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.outcome()).toBe('scissors decapitates lizard');

      });

      it('should lose to rock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        expect(game.outcome()).toBe('rock smashes scissors');

      });

    });

    describe('spock', function() {

    it('should beat rock', function() {

        player1.picks('spock');
        player2.picks('rock');
        expect(game.outcome()).toEqual('spock vaporizes rock');

    });

    it('should beat scissors', function() {

      player1.picks('spock');
      player2.picks('scissors');
      expect(game.outcome()).toBe('spock smashes scissors');
    });

  });

  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no outcome', function() {

        var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.outcome();
        });

        expect(drawGameResults).toEqual([null, null, null]);

      });

    });

  });

});