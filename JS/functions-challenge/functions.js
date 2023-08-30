// Moon Orbits // takes earth days // return moon orbits
// moonOrbits(54) => 2
// moonOrbits(365) => 13.359

function moonOrbits (earthDays) {
	return Math.floor(earthDays / 27.3);
}

console.log(moonOrbits (54));


// Challenge: Working with Circles
// circleArea(10) => 314.16
// circlePerimeter(10) => 62.83

// Write a function that takes the radius of a circle and return its area.
function circleArea (radius) {
	return radius * radius * 3.1416
}

console.log(circleArea(10)); // 3.1416

// Write a function that takes the radius of a circle and return its perimeter.

function circlePerimeter (radius) {
	return 2 * 3.1416 * radius 
}

console.log(circlePerimeter(10)); //62.83


// Challenge: Years to Days & Seconds
// ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000

 // Create a function that takes your age in years and returns your age in days.
function myAgeInDays (myAge) {
	return myAge * 365;
}

console.log(myAgeInDays(32));

// Create a function that takes your age in years and returns your age in seconds.
function myAgeInSeconds (myAge) {
	return myAge * 31536000;
}

console.log(myAgeInSeconds(32));


//Challenge: Return the Remainder from Two Numbers
//Two numbers are passed as parameters.
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0

number1 = 5;
number2 = 5;

function reminderOfTwoNumbers (first, second) {
	return first % second;
}

console.log(reminderOfTwoNumbers(-9,45));
console.log(reminderOfTwoNumbers(number1,number2));

// Challenge: Basketball Points

//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, 
//find the final points for the team and return that value.
// Challenge: Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117
// lessThan100(3, 77) ➞ true

function basketballPoints (firstNumber, secondNumber) {
	if (firstNumber + secondNumber < 100) {
		return true
	} else return false
};

console.log(basketballPoints(22,15));




