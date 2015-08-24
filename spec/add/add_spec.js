var jasmine = require('jasmine'),
	app = require('../../index.js');

describe('calculator add functionality', function() {

	it('has an add function', function() {
		var calculator = new app.Calculator();

		expect(typeof calculator.add).toBe('function');
	})

	it('has an add function that pushes a plus sign into the pipe', function() {
		var calculator = new app.Calculator();

		calculator.add();

		expect(calculator.pipe[calculator.pipe.length - 1]).toEqual('+');
	});

	it('has an add function that retuns the calculator objec to allow chaining', function() {
		var calculator = new app.Calculator();

		expect(calculator.add()).toBe(calculator);
	});

});