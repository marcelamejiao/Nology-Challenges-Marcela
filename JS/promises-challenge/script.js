// Challenge: Delayed Increment / Decrement
// MVP
// Create a function called delayedIncDec(n, mode, timeout)
// n: Initial number
// mode: mode should take in either inc or dec, and should change whether the function increments or decrements
// timeout: the delay time, should default to 2.5 seconds
// Call this function three times with different numbers, modes and timeouts
// After each promise resolves print the output number to the console
// The function should reject if passed an invalid mode or argument for n

const delayedIncDec = (n, mode, timeout = 2500)  => {
	return new Promise((resolve, reject) => {
		if (typeof n !== 'number' || (mode !== 'inc' && mode !== 'dec')) {
			reject(new Error("n should be a number and mode should be inc or dec"))
		} else {  
			setTimeout(() => {
				if(mode === "inc"){
					resolve(++n);
				} else {
					resolve(--n);
				}
			}, timeout);
		}
	});
};

delayedIncDec(3, "inc", 2500)
	.then((number) => {
		console.log("The incremented number is: ", number);
	});

	delayedIncDec("hi", "inc", 2300)
	.then((number) => {
		console.log("The incremented number is: ", number);
	})
	.catch((error) => {
		console.warn(error);
	});

// Challenge: Delayed Filter
// MVP
// Create a function called delayedFilter(array, callback, timeout)
// array: List to be filtered
// callback: function to filter with
// timeout: the delay time, should default to 2.5 seconds
// Call this function twice with different arrays, callbacks and timeouts
// After each promise resolves print the list to the console
// This function should reject if array is not an array, or callback is not a function

const delayedFilter = (array, callback, timeout = 2500) => {
	return new Promise((resolve, reject) => {
		if(!(array instanceof Array)) {
			reject(new Error("this is not an array"));
			return;
		}
		if(typeof callback !== "function"){
			reject(new Error("the callback is not a fucntion"))
			return;
		}
		setTimeout(() => {
			resolve(array.filter(callback));
		}, timeout);
	});
}

const callback = (element) => {
	return element % 2 === 1;
}

delayedFilter(" ", callback, 3000)
.then((array) => {
	console.log(array);
})
.catch((error) => {
	console.warn(error)
});
