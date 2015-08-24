## Calculator

A calculator app tested in Jasmine to have the form of...

var calc = new Calculator();

of which you could then do commands as such...

var result = calc.input(5).input(5).add().resolve(); // result = 10