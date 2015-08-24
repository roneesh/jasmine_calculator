function Calculator() {
	this.pipe = [];

	this.add = function() {

	}
	
	this.input = function(number) {
		if (typeof number !== 'number') {
			throw new Error('calculator can only accept numbers');
		}

		return this.pipe.push(number);
	}
}

module.exports = {
	Calculator : Calculator
}