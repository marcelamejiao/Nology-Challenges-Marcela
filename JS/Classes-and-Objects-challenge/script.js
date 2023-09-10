// // WALK THE DOG
// Create an object that represents a pet dog
// Needs to have three methods
// walk - should take in a parameter for the distance walked in km
// walkSummary - should console log how many walks the dog has gone on, and what the total distance is
// walkAverage - should return a number that represents the average distance of walk this dog has been on.
// BONUS
// Research and add some static fields and methods
// A static method like Dog.walkAverage should get the average walk distance of ALL dogs that have been created


//create the object
class Dog {

	static allDogs = [];
  static getDogsByBreed(breed) {
    return this.allDogs.filter((dog) => dog.breed === breed);
  }

  static walkAverage() {
    const averages = this.allDogs.map((dog) => dog.walkAverage());
    const sum = averages.reduce((a, b) => a + b);
    return sum / this.allDogs.length;
  }


	constructor(name, age, breed) {
		this.name = name;
		this.age = age;
		this.breed = breed;
		this.walks = [];
		Dog.allDogs.push(this);
	}

	walk(km) {
		this.walks.push(km)
	}

	totalWalkKm() {
		return this.walks.reduce((total, distance) => {
			return total + distance
		});
	}

	walkAverage() {
		return this.totalWalkKm() / this.walks.length;
	}

	walkSummary () {
		console.log(`The number of walks the dog has gone on: ${this.walks.length}`);
		console.log(`Total distance: ${this.totalWalkKm()}`);
	}
}

const dixie = new Dog ("Dixie", 4, "German");
dixie.walk(25);
dixie.walk(15);
dixie.walk(5);
dixie.walkSummary();

const ella = new Dog ("Ella", 10, "German");
ella.walk(10);
ella.walk(3);
ella.walk(2);
ella.walkSummary();
