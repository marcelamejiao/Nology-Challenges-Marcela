//Join

// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, 
// separated by commas or a specified separator string. 
// If the array has only one item, then that item will be returned without using the separator.

const join = (array, separator) => {
	let string = "";

	for (let i = 0; i < array.length; i++) {
		if(separator !== undefined) {
			if(i === array.length - 1) {
				string += array[i];
			} else {
				string += array[i] + separator;
			}
		} else {
			if (i === array.length - 1) {
				string += array[i];
			} else {
				string += array[i] + ",";
			}
		}
	}
	return string; 
}

console.log(join([1,2,3,4,5]));

