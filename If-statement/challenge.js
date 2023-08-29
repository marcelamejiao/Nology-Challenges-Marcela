// check if a number is odd or even

let n = 4;
if (typeof n === "number" && n % 2 === 0) {
	console.log("this number is even");
} else if (typeof n === "number" && n % 2 === 1 ) {
	console.log("this number is odd");
} else {
	console.log("invalid n")
}

// shorter answer:
let m = 4;

if (typeof m === "number") {
	//the evne or odd check here
	if(!(n % 2)) console.log("M is even");
	else console.log("M is odd");
} else {
	console.log("Invalid input")
}


// Comparing Numbers

let x = 5;
let y = 4;

if (x > y) {
	console.log("x is greater than y"); 
} else if ( x < y) {
	console.log(" x is smaller than y") ;
} else {
	console.log("x is equal to y")
}
	
// user inout type 

let userInput = {}

if (typeof userInput === "number" ) {
	console.log(userInput*userInput);	
} else if (typeof userInput === "string") {
	console.log(userInput);
} else {
	console.log("Invalid input")
}