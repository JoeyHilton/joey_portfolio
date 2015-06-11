$( document ).ready(function() {
    // console.log( "ready!" );
    $(function(){
      $comp_wins = 0;
      $human_wins = 0;
      $games_played = 0;
      $(document).on('click', '.game-image', function(event){
        var value = $(event.target).data('value');
        console.log(value)
        var winner;
        var humanWon;
        var compChoice = 1 + Math.floor(Math.random() * 3);
        console.log(compChoice)
        if (compChoice === 1){
          comp = "rock";
        } else if (compChoice === 2){
          comp = "paper";
        } else if (compChoice === 3){
          comp = "scissors"
        }

        if (value === compChoice){
          winner = "It's a tie!"
        } else if (value === 1){
          if (compChoice === 3){
            winner = "You win, the computer chose " + comp + ".";
            humanWon = true;
          } else if (compChoice === 2){
            winner = "You lose, the computer chose " + comp + ".";
            humanWon = false;
          } 
        } else if (value === 2){
          if (compChoice === 1){
            winner = "You win, the computer chose " + comp + ".";
            humanWon = true;
          } else if (compChoice === 3){
            winner = "You lose, the computer chose " + comp + ".";
            humanWon = false;
          }
        } else if (value === 3){
          if (compChoice === 2){
            winner = "You win, the computer chose " + comp + ".";
            humanWon = true;
          } else if (compChoice === 1){
            winner = "You lose, the computer chose " + comp + ".";
            humanWon = false;
          }
        }
        console.log(winner);
        $('#winner').text(winner);
        $games_played += 1
        $('.games_played').html('Games Played: ' + $games_played)
        if (humanWon === true) {
          $human_wins += 1
          $('.human_wins').html('Human Wins: ' + $human_wins)
        }
        if (humanWon === false) {
          $comp_wins += 1
          $('.comp_wins').html('Computer Wins: ' + $comp_wins)
        }
      });

});

});