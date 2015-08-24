function Calculator() {
	this.pipe = [];

	this.add = function() {
		if (this.pipe[this.pipe.length - 1] === '+') {
			throw new Error('two addition signs can not be next to each other');
		}
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

	this.resolve = function() {
		var result = null,
			i,
			pipeLen = this.pipe.length,
			flattenIndices = [0],
			that = this;
		
		for (i = 0; i < pipeLen; i++) {
			if (this.pipe[i] === '+') {
				flattenIndices.push(i);
			}
		}

		flattenIndices.reduce(function(previousValue, currentValue) {
			result += that.pipe.slice(previousValue, currentValue).reduce(function(a,b){
				return a + b;
			});
		});

		return result;
		
	}
}

module.exports = {
	Calculator : Calculator
}