// Create a switch block that will log a string for each day of the week.

let day = 6;

switch (day) {
	case 1:
		console.log("Today is Monday");
		break;
	case 2:
		console.log("Today is Tuesday");
		break;
	case 3:
		console.log("Today is Wednesday");
		break;
	case 4:
		console.log("Today is Thursday");
		break;
	case 5:
		console.log("Today is Friday");
		break;
	case 6:
		console.log("Today is Saturday");
		break;
	case 7:
		console.log("Today is Sunday");
		break;
	default:
		console.log("It is a number out of range");
}



//  Eye Colour

let parent1 = "blue";
let parent2 = "blue";

let parents = parent1 + " " + parent2;

switch (parents) {
	case "brown brown":
		console.log(`Youre ayes are: ${parent1} and ${parent2} +  
		the chances of your child having brown:50% green:18.7% blue:6.25%`);
		break;
	case "green brown":
		console.log(`Youre ayes are: ${parent1} and ${parent2} +  
		the chances of your child having brown:50% green:18.7% blue:6.25%`);
		break;
	case "blue brown":
		console.log(`Youre ayes are: ${parent1} and ${parent2} +  
		the chances of your child having brown:50% green:0% blue:50%`);
		break;
	case "green green":
		console.log(`Youre ayes are: ${parent1} and ${parent2} +  
		the chances of your child having brown:<1%> green:25% blue:75%`);
		break;
	case "green blue":
		console.log(`Youre ayes are: ${parent1} and ${parent2} +  
		the chances of your child having brown:0% green:50% blue:50%`);
		break;
	default:
	console.log(`Youre ayes are: ${parent1} and ${parent2} +  
	the chances of your child having brown:0% green:1% blue:99%`);
}
