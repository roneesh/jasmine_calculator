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

	it('throws an error if input is not a number', function() {
		var calculator = new app.Calculator();

		expect(function() {
			calculator.input('number');
		}).toThrowError('calculator can only accept numbers');
	});

	it('retuns the calculator object after input to allow chaining', function() {
		var calculator = new app.Calculator();

		expect(calculator.input(5)).toBe(calculator);
	});

});