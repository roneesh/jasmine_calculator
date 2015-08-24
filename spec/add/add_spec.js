var jasmine = require('jasmine'),
	app = require('../../index.js');

describe('calculator add functionality', function() {

	it('has an add function', function() {
		var calculator = new app.Calculator();

		expect(typeof calculator.add).toBe('function');
	})

	it('has an add function that retuns the calculator object to allow chaining', function() {
		var calculator = new app.Calculator();

		expect(calculator.add()).toBe(calculator);
	});

	it('has an add function that sums up the preceeding numbers and adds it to the accumulator', function() {

		var calculator = new app.Calculator();

		expect(calculator.input(5).add().accumulator).toBe(5);
	});


});