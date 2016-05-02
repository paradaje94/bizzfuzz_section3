var fb = require('../fizzbuzz');

describe("a program that plays bizzfuzz", function() {

	it("can count from 1 to 5", function() {
		expect(fb. count(1,100)) .toBe("1 2 fizz 4 buzz");
	});

	it("can take multiples of 3 and return 'fizz'", function() {
		expect(fb.fizzer(3)).toBe(fizz);
		expect(fb.fizzer(33)).toBe(fizz);
		expect(fb.fizzer(81)).toBe(fizz);
    });	
	
	it("can take multiples of 5 and return 'buzz'", function() {
		expect(fb.fizzer(5)).toBe(buzz);
		expect(fb.fizzer(6)).toBe(6);
		expect(fb.fizzer(17)).toBe(17);
	});

	it("can take multiples of 15 return 'fizzbuzz'", function() {
		expect(fb.fizzer(30)).toBe(fizzbuzz);
		expect(fb.fizzer(15)).toBe(fizzbuzz);
		expect(fb.fizzer(17)).toBe(17);
	});
});
