const setBottleAndButtonColor = (color) => {
	const bottleImage = document.querySelector("#bottleImage");
	const button = document.querySelector("#btn");
	

	if(color === "red") {
	bottleImage.setAttribute("src", "./assets/red_beer.svg")
	button.classList.remove('button--come-in')
	button.classList.add('button--cant-come-in')

	} else {
		bottleImage.setAttribute("src", "./assets/green_beer.svg")
		button.classList.remove('button--cant-come-in')
		button.classList.add('button--come-in')
	}
}

const setMessage = (text) => {
	const message = document.querySelector("#message");
	
	// message.innerText = text;

	// Remove all child nodes from the message
	message.childNodes.forEach((childNode) => {
		message.removeChild(childNode)
	});
	const textNode = document.createTextNode(text);
	message.appendChild(textNode);

	// const myParagraph = document.createElement('p');
	// myParagraph.innerText = text;
	// message.appendChild(myParagraph);
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();

	const age = document.querySelector('#age');
	const ageValue = age.value;

	const country = document.querySelector('#country');
	const countryValue = country.value;

	const alcoholLevel = document.querySelector('#drunk');
	const alcoholLevelValue = alcoholLevel.value;

	if (ageValue < 18 ) {
		setBottleAndButtonColor("red")
		setMessage(`you can not come in because you're under the minimum legal drinking age`)
	} else if (ageValue < 21 && countryValue === "USA" ) {
		setBottleAndButtonColor("red")
		setMessage(`you can not come in because you're under the minimum legal drinking age`)
	} else if (alcoholLevelValue > 3) {
		setBottleAndButtonColor("red")
		setMessage(`you can not come in because you're alcohol level is high`);
	} else {
		setBottleAndButtonColor("green")
		setMessage(`you can come in`)
	}

});


// getting data using FormData

// const data = new FormData(event.target);
	
// const username = data.get('username');
// const email = data.get('email');

// using query sleecter
// const data = new FormData(document.getElementByIdId('registerForm'))