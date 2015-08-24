function Calculator() {
	this.pipe = [];

	this.add = function() {

	}
	
	this.input = function(number) {
		return this.pipe.push(number);
	}
}

module.exports = {
	Calculator : Calculator
}