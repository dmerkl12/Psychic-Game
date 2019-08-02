        
        
        
        let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		let wins = 0;
		let losses = 0;
        let guessesLeft = 9;
        let guesses = 9;
        let lettersChose = [];
        let letterchange = null;
         
        

        let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
         function updateGuessesLeft() {
            document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
         };
         function updateGuessed() {
            document.querySelector('#letters-Chose').innerHTML = "Guesses So Far: " + lettersChose.join(', ');
         }

            updateGuessesLeft();

            const restart = function() {
    
                guessesLeft = 9;                   
                lettersChose = [];
    
       
        }

        document.onkeyup = function(event) {
            guessesLeft--;
        
            const userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        
            lettersChose.push(userGuess);
            updateGuessesLeft();
            updateGuessed();
        
            if (userGuess === computerGuess){
                wins++;
                document.querySelector("#wins").innerHTML = "Wins: " + wins;
                restart();
            } 
            else if (guessesLeft === 0) {
                losses++;
                document.querySelector("#lost").innerHTML = "Losses: " + losses;
                restart();
            }
          }; 