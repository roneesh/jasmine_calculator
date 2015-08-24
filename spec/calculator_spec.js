var jasmine = require('jasmine'),
	app = require('../index.js');

describe('calculator', function() {

	it('initializes', function() {
		var calculator = new app.Calculator();
		expect(typeof calculator).toBe('object');
	});

	it('has an add function', function() {
		var calculator = new app.Calculator();

		expect(typeof calculator.add).toBe('function');
	})

	it('has an input function to accept numerical input', function() {
		var calculator = new app.Calculator();

		expect(typeof calculator.input).toBe('function');
	});

});