var words = ["pig", "cow", "chicken", "lamb", "horse", "goat", "sheep", "rooster" ];
var word;
var answerArray;
var lettersGuessed;
var guessesLeft;
var counter;
var wins = 0;

function reset(){
	document.getElementById('letter-guessed').innerHTML = " ";
	guessesLeft = 12;
	answerArray = [];
	word = words[Math.floor(Math.random() * words.length)];
	for (var i = 0; i < word.length; i++){
 		answerArray.push("_");
 		document.getElementById('game-word').innerHTML = answerArray.join(" ");
 	}
 	document.getElementById('guesses-left').innerHTML = guessesLeft;
 	//console.log(word);
 	counter = 0;
}
reset();

function isLetter(letter){
	return letter.match(/[a-zA-Z]/);
}

document.onkeyup = function(event) {
	// Determines which key was pressed.
	var userGuess = String.fromCharCode(event.keyCode || event.code).toLowerCase();
	if (isLetter(userGuess)) {
	

		for(var i = 0; i < word.length; i++){   
		    if(userGuess === word[i]){
		    answerArray[i] = userGuess;
		    document.getElementById('game-word').innerHTML = answerArray.join(" ");
		    counter ++;
		    }
		}
	//console.log(counter);

	lettersGuessed = document.createElement('li');
	lettersGuessed.innerHTML = userGuess;
	document.getElementById('letter-guessed').appendChild(lettersGuessed);

	guessesLeft--;
		document.getElementById('guesses-left').innerHTML = guessesLeft;
		if (guessesLeft < 1){
			alert("Game Over");
			reset();
		}


	if(counter === word.length){
	    wins ++;
	    document.getElementById('num-wins').innerHTML = wins;
	    reset();
	}
	}
}