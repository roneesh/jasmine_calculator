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
	
	this.input = function(number) {
		if (typeof number !== 'number') {
			throw new Error('calculator can only accept numbers');
		}

		this.pipe.push(number);
		return this;
	}

	this.resolve = function() {
		var result = 0,
			i, j,
			pipeLen = this.pipe.length,
			flattenIndices = [];
		
		for (i = 0; i < pipeLen; i++) {
			if (this.pipe[i] === '+') {
				flattenIndices.push(i);
			}
		}

		// flattenIndices.reduce(function(previousValue, currentValue) {
		// 	result += that.pipe.slice(previousValue, currentValue).reduce(function(a,b){
		// 		return a + b;
		// 	});
		// });
		for (j = 0; j < flattenIndices.length; j++) {
			result += this.pipe.slice( 0, (i - 1)).reduce(function(a,b) {
				return a + b;
			});
		}

		return ;
		
	}
}

module.exports = {
	Calculator : Calculator
}