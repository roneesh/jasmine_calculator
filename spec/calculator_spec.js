var jasmine = require('jasmine'),
	app = require('../index.js');

describe('calculator', function() {

	it('initializes', function() {
		var calculator = new app.Calculator();
		expect(typeof calculator).toBe('object');
	});

	xit('resolves to a value', function() {
		var calculator = new app.Calculator();

		expect(calculator.input(5).input(5).add().resolve()).toEqual(10);
	});

	xit('resolves three numbers to a value', function() {
		var calculator = new app.Calculator();

		expect(calculator.input(5).input(5).input(5).add().resolve()).toEqual(15);
	});

	xit('resolves to a value after two add chains', function() {
		var calculator = new app.Calculator();

		expect(calculator.input(5).input(5).add().input(5).input(5).add().resolve()).toEqual(20);
	})

});