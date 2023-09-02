// Challenge: Generating Unique Random Numbers
// MVP
// Using a while loop generate a list of 10 random unique numbers
// Each number must be between 0 and 15
// Tips
// You may need to google how to generate, you can use the Math.random() API

let i = 0;
// declare an array to push each number
let uniqueNumbers = [];

// run 10 times 
while(i < 10) {
  // generate a random number between 0 and 15
  const randomNumber = Math.floor(Math.random() * 16);
  
  // check if in the array we dont have the random number
  if (!(uniqueNumbers.includes(randomNumber))) {
    // push the number in an array
    uniqueNumbers.push(randomNumber);
  } else {
    continue; //go back to the start of the iteration to find the unique number before incrementing
  }
  // increment i by one to go to the next iteration
  i++;
}

console.log(uniqueNumbers);

// Create a function that returns a list of random whole numbers given a range
// Create a function called generateNumbers
// This function should take in 2 numbers
// n being the number of numbers to be generated
// r being the max range
// E.g: n: 10, r: 20: function will generate 10 random numbers between 0 and 20
// Function should return n numbers in range 0 <= n < r
// Bonus
// Add an argument to your function called isUnique
// If this is set to true, there should be no duplicate numbers in the output



const generateNumbers = (n, r, isUnique) => {
  let numbers = [];
  let i = 0;
  while(i < n) {
    const randomNumber = Math.floor(Math.random() * (r + 1));
    
    if(isUnique) {
      if (numbers.includes(randomNumber)) {
        continue;
      }  
    }
    numbers.push(randomNumber);
    i++;
  }
  

  return numbers;
};
 


console.log(generateNumbers(10,15,true));

