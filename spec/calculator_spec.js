var jasmine = require('jasmine'),
	app = require('../index.js');

describe('calculator', function() {

	it('initializes', function() {
		var calculator = new app.Calculator();
		
		expect(typeof calculator).toBe('object');
	});

	it('resolves to a value and clears out its pipe and accumulator', function() {
		var calculator = new app.Calculator();

		expect(calculator.input(5).input(5).add().resolve()).toEqual(10);
		expect(calculator.pipe).toEqual([]);
		expect(calculator.accumulator).toEqual(0);
	});

	it('resolves to a value after two add chains', function() {
		var calculator = new app.Calculator();

		expect(calculator.input(5).input(5).add().input(5).input(5).add().resolve()).toEqual(20);
		expect(calculator.pipe).toEqual([]);
		expect(calculator.accumulator).toEqual(0);
	});

});