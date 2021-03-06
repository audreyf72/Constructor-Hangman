//Compares the letters guessed against the random word selected
var lettersGuessed = require("./letter.js");

function Word(value){
	this.value = value;
	this.letters = [];
	this.guessesMade = "";
	for(var i = 0; i < this.value.length; i++) {
		this.letters.push(new lettersGuessed.letter(this.value[i]));
	}
};

Word.prototype.isComplete = function(){
	for(var i = 0; i < this.letters.length; i++){
		if(!this.letters[i].show) return false;
	}
	return true;
}

Word.prototype.findLetter = function(letter){
	var lowerLetter = letter.toLowerCase();
	if (this.guessesMade.indexOf(lowerLetter) != -1) {
		return "Duplicate";
	} 
	this.guessesMade += lowerLetter; //Stores the guess
	for(var i=0; i<this.letters.length;i++){
		if(this.letters[i].value.toLowerCase() == lowerLetter){
		this.letters[i].show = true;
		}
	}
};

Word.prototype.toString = function(){
  var output = "";
  for(var i=0; i<this.letters.length; i++){
    output += this.letters[i].printInfo();
  }
  return output;
}

exports.wordConditions = Word;