function Calculator() {
	this.pipe = [];

	this.add = function() {
		return this.pipe.push('+');
	}
	
	this.input = function(number) {
		if (typeof number !== 'number') {
			throw new Error('calculator can only accept numbers');
		}

		this.pipe.push(number);
		return this;
	}
}

module.exports = {
	Calculator : Calculator
}