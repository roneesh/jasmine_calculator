function Calculator() {
	this.pipe = [];
	this.accumulator = 0;

	this.add = function() {
		if (this.pipe.length > 0) {
			this.accumulator += this.pipe.reduce(function(a,b) {
				return a + b;
			});
			this.pipe = [ ];
		}

		return this;
	}

	this.subtract = function() {
		if (this.pipe.length > 0) {
			this.accumulator -= this.pipe.reduce(function(a,b) {
				return a - b;
			});		
			this.pipe = [ ];	
		}

		return this;
	}
	
	this.input = function(number) {
		if (typeof number !== 'number') {
			throw new Error('calculator can only accept numbers');
		}

		this.pipe.push(number);
		return this;
	}

	this.resolve = function() {
		var output = this.accumulator;
		this.pipe = [];
		this.accumulator = 0;
		return output;
	}
}

module.exports = {
	Calculator : Calculator
}