// Count occurances
// Write a function that will count how many times an element occurs in an array
// It should take two arguments. An array, and the thing we want to count
// examples
// countOccurances([1,2,1,3,4,1,1,2,4], 1) SHOULD RETURN 4
// countOccurances([1,2,1,3,4,1,1,2,4], 2 ) SHOULD RETURN 2
// countOccurances([1,2,1,3,4,1,1,2,4], 3) SHOULD RETURN 1
// countOccurances(["Alex", "Remi", "calum", "Alex"], "Alex") SHOULD RETURN 2

const countOcurrances = {
	counting(array, thing) {
		return array.filter(x => x == thing).length
	},
}

console.log(countOcurrances.counting(["Alex", "Remi", "calum", "Alex"], "Alex"));