// Implementing find index
// find the element that matches with the parameter and return its index
const findIndexSimple = (word, wordsArray) => {
	for (let i = 0; i < wordsArray.length; i++) {
		if(word === wordsArray[i]) {
			return i;
		}	
	}
	return -1
};

// This is the test
console.log(findIndexSimple("tomatoes", ['apples', 'carrots', 'tomatoes', 'bananas']));
console.log(findIndexSimple("papaya", ['apples', 'carrots', 'tomatoes', 'bananas']));

// This is JS's find index
const findIndex = (callback, wordsArray) => {
	for (let i = 0; i < wordsArray.length; i++) {
		if (callback(wordsArray[i])) {
			return i
		}
	}
	return -1;
};

console.log(findIndex(function(word){ return word === "tomatoes" }, ['apples', 'carrots', 'tomatoes', 'bananas']))
console.log(findIndex(function(word){ return word.charAt(0) === "t" }, ['apples', 'carrots', 'tomatoes', 'bananas']))
console.log(findIndex(function(word){ return word.includes('o') }, ['apples', 'carrots', 'tomatoes', 'bananas']))

