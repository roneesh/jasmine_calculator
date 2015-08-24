var jasmine = require('jasmine'),
	app = require('../../index.js');

describe('calculator input function', function() {

	it('has an input function to accept numerical input', function() {
		var calculator = new app.Calculator();

		expect(typeof calculator.input).toBe('function');
	});

	it('takes a numerical input into its pipe', function() {
		var calculator = new app.Calculator();

		calculator.input(5);

		expect(calculator.pipe).toEqual([5]);
	});

});