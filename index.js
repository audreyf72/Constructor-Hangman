var wordConditions = require("./word.js");
var lettersGuessed = require("./letter.js");
var inquirer = require("inquirer");
var randomWord = [];
var playerGuess;
exports.letter;

//Sets a random Marvel Superhero to guess
var wordsToGuess = ["Ironman", "Incredible Hulk", "Black Panther", "Thor", "Captain America", "Wolverine", "Black Widow", "The Vision", "Spiderman", "Hawkeye", "Ant Man", "Scarlet Witch", "Doctor Strange"];
var wordIndex = Math.floor(Math.random() * wordsToGuess.length);
var randomWord = wordsToGuess[wordIndex];

//Sets word in play and stores it in the word.js file
var wordInPlay = new wordConditions.wordConditions(randomWord);

//Sets limit to guesses based on word length
var guessLimit = randomWord.length + 7;

//Welcome message at start of game
console.log('Welcome to Marvel Superhero Word Guess!\n');
console.log('You have ' + (guessLimit - wordInPlay.guessesMade.length) + ' guesses for this word.\n')

//Checks player guesses left
function playerGuesses(){
	console.log(wordInPlay.toString());
	if (wordInPlay.guessesMade.length >= guessLimit){
		console.log('Sorry. You are out of guesses!');
	return; //Game over
	}
//Game prompt to enter a letter	
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Please enter a letter:',

//Validates the letter played with a regular expression object
		validate: function(str){
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
				}
//Checks to see if letters have matched the random word				
		}]).then(function(playerGuess){ 
				var letter = playerGuess.letter; 
				wordInPlay.findLetter(letter); 
					if(wordInPlay.isComplete()){ 
					console.log('Yeah! It was ' + wordInPlay.toString() + '!');
					return; //Winner
					}
				console.log('-------------------\n'); //If there are still letters in the random word to guess continue...
				console.log('You have ' + (guessLimit - wordInPlay.guessesMade.length) + ' guesses left.\n')
				playerGuesses(); //Recursive call
				}
  );
}

playerGuesses(); //Start Game