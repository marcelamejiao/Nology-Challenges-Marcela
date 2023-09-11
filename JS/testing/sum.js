// A function that calculates the sum of numbers
// returns the sum of numbers
// it should work for different amount of arguments - 1 or more

// no parameters sum() -> throw an error
// all parameters must be numbers -> if not throw an error sum(2, "apple", true)

// sum(2)
// sum(2, 3, 4, 5)
// sum(10, 11, 11, 11, 11, 11, 11)

export const incorrectArgTypeError = new 
Error(
	"incorrect value, please provided numbers"
);

export const noArguments = new 
Error(
	"Please provide numbers to calculate the sum"
);


export const sum = (...numbers) => {
	if (numbers.length === 0) {
		throw noArguments;
	}

	numbers.map((element) => {
		if(typeof element !== "number") {
			throw incorrectArgTypeError;
		}
	})
	
	const sum = Math.round(numbers.reduce((total, item) => total + item)*100)/100; 

	return sum;
};
