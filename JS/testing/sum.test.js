import { sum } from "./sum";
import { incorrectArgTypeError } from "./sum";
import { noArguments } from "./sum";

describe('test cases for a function that calculates the sum of numbers', () => {

	it('throws an error when a parameter is not provided ', () => {
		expect(() => {
			sum();
		}).toThrow(noArguments);
	});
		
	it("throws an error when incorrect argument type is passed", () => {
		expect(() => {
				sum("apple", "hi");
		}).toThrow(incorrectArgTypeError);
		expect(() => {
				sum(true, false);
		}).toThrow(incorrectArgTypeError);
		expect(() => {
				sum(2, false);
		}).toThrow(incorrectArgTypeError);
		expect(() => {
				sum("hi", 23);
		}).toThrow(incorrectArgTypeError);
	});

	it('returns the rigth sum of valid numbers', () => {
		expect(sum(2)).toBe(2);
		expect(sum(2, 3, 1, 2)).toBe(8);
		expect(sum(200, 100, 300)).toBe(600);
		expect(sum(2.2, 1.2)).toBe(3.4);
	});
});
