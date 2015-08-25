var jasmine = require('jasmine'),
	app = require('../../index.js');

describe('calculator subtract functionality', function() {

	it('has a subtract function', function() {
		var calculator = new app.Calculator();

		expect(typeof calculator.subtract).toBe('function');
	});

	it('has an add function that retuns the calculator object to allow chaining', function() {
		var calculator = new app.Calculator();

		expect(calculator.subtract()).toBe(calculator);
	});

	it('has a function that subtracts the preceeding numbers from the accumulator', function() {
		var calculator = new app.Calculator();

		expect(calculator.input(10).add().input(5).subtract().accumulator).toEqual(5);
	});

});