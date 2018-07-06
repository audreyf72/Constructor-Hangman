//Determines if the player guess matches and will display as a letter or remain an underscore
exports.letter = Letter;

function Letter(value) {
	this.value = value;
	this.show = false;
	if (this.value == ' ') 
		this.show = true;
}

Letter.prototype.printInfo = function() {
	if (this.show) {
		return this.value;
	}
	return "_ ";
}