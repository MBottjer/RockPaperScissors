$(function() { })
        var Michael = new Player('Michael');
        var Jack = new Player('Jack');
        var game = new Game(Michael, Jack);

        $('button').on('click', function() {

          Michael.picks(game.randomGenerator());
          Jack.picks($(this).data('pick'));
            $('.message').html(game.outcome(Michael, Jack));
            $('.messagetwo').html(game.winner(Michael, Jack));

            $.post('/results', {result: game.winner(Michael, Jack) }, function(wins) { 
              $('.wins').html(wins);

              $.post('/computerwin', { result: game.winner(Michael, Jack) }, function(comp) {
                $('.compwin').html(comp);
                })

            })

            

        })