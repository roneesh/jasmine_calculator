function Calculator() {
	this.pipe = [];

	this.add = function() {
		this.pipe.push('+');
		return this;
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