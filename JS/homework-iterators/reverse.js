// Reverse
// takes the elements of an array and reverse their positions, making the first one the 
// last one and the last one the first one.
// returns an array

const reverse = (array) => {
	let reversedArray = [];
	// for loop to start from the last index and finish at the index 0
	// to push each element to the new array which resulted in a reversed array
	for (let i = array.length - 1; i > -1 ; i--) {
		reversedArray.push(array[i]);	
	}
	// to return the original array we replace its elements with the reversed array's elements
	for (let i = 0; i < array.length; i++) {
		array[i] = reversedArray[i]
	}

	return array;
}

const myArray = [1,2,3,4,5];
console.log(reverse(myArray));
console.log(myArray);