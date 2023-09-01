// Challenge: Sum of n
// MVP:
// Create a function with a for loop that will add all the numbers up to n
// You should create a variable to set the upper limit of your loop
// Your loop should increment by 1 on each iteration
// Your loop should print the final result
// sum(10) => 55
// Bonus:
// Try writing the function again with the same inputs and outputs Without using a loop. (You may need to google some formulas!)

const numbers = 10;

function sumOfNumbers(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	console.log(sum);
}

sumOfNumbers(numbers);

function add(n) {
 const numbersAdded = (n * (n + 1)) / 2;
 console.log(numbersAdded);
}

add(10);


// Create a function with a for loop that will add numbers to your shopping list
// Store the following array in a variable
// Your loop should iterate through every value in the array
// Your loop should print a shopping list with the number and the name of the item
// ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];
// =>
// // In Console
// 1. milk
// 2. watermelon
// 3. eggs
// 4. soap
// 5. butter
// 6. apples
// 7. ice-cream

const myShopping = ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];

for (let i = 0; i < myShopping.length; i++) {
	myShopping[i] = (i + 1) + ". " + myShopping[i] ;
}

console.log(myShopping);

// Challenge: Capitalizing Odd Positioned Letters
// MVP
// Create a variable with a string of your choice
// Loop through the letters in this string and build a new string
// If the current index is odd, capitalize the letter before adding it to the new string
// Bonus
// If the current index is even increment the letter
// E.g: a becomes b, d becomes e, t becomes u
// Final: z becomes a

let myName = "Marcelazz";
let myNewName = "";

for (let i = 0; i < myName.length; i++) {
	const myLetter = myName.charAt(i);

	if(i % 2 === 1) {
		myNewName += myLetter.toUpperCase();
		// if (myLetter.toLocaleLowerCase() === "z") {
		// myNewName += "a";
		// } TODO
	} else {
	 	let myCharCode = myName.charCodeAt(i); //charCodeAt letter to code(number)
		myNewName += String.fromCharCode(myCharCode + 1); //fromCharCode from code(number) to letter
	}
}

console.log(myNewName);


// Challenge: Removing Vowels
// MVP
// Create a variable with a string of your choice
// Loop through the letters in this and build a new string
// The new string should be the same as the input with the vowels missing
// E.g: calum => clm, rachel => rchl, martyna => mrtyn
// Bonus
// Keep vowels in the new strings if they are succeeded by the letters l, m, or r
// E.g: calum => calum, rachel => rchel, martyna => martyn

let myName2 = "Marcela";

// new string
let myNewName2 = "";

// check if each letter is a vowel
for (let i = 0; i < myName2.length; i++) {
	// Get the current letter
	const currentLetter = myName2.charAt(i);

	// Check if the current letter is a vowel
	if(["a","e","i","o","u"].includes(currentLetter)) {
		//do nothing;
	} else {
		// Add the current letter to the new string
		myNewName2 += currentLetter
	}
}

console.log(myNewName2);