// Challenge: Listing Hobbies








// Create an array with 3 of your hobbies
// Print in the console the first hobby in the array
const myHobbies = ["dancing", 'playingDrums', 'hiking'];
console.log(myHobbies[0]);

// Remove that first hobby from the array and store that hobby in a variable
const removedHobbie = myHobbies.shift();
console.log(removedHobbie);

// Store the length of the array in a variable
const lengthArray = myHobbies.length;
console.log(lengthArray);

// Add another hobby at the end of the array

myHobbies.push("reading");
console.log(myHobbies);

// Print that last hobby in the console
console.log(myHobbies[myHobbies.length - 1]);

// Bonus:
// Join all your hobbies in a single string each hobby being comma separated (i.e. “My hobbies are: hobby1, hobby2, hobby2”)

hobbiesStr = `My hobbies are ${myHobbies.join(", ")}`;
console.log(hobbiesStr);


// Challenge: Grocery Lists
// MVP
// Create an array containing 5 grocery items you often buy
// Log this list to the console, make sure the output is pipe delimited
// ['apple', 'pear', 'papaya', 'mango'] => 'apple|pear|papaya|mango'

const shoppingList = ["rice", "tomato", "carrots", "banana", "blueberries"];
console.log(shoppingList.join("|"));