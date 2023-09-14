const getRandomUser = async () => {
  // wait for the response
  const response = await fetch('https://randomuser.me/api');
  // turn response into data
  if (!response.ok) {
    throw new Error('Ooops');
  }
  const data = await response.json();
  return data.results[0];
};

const addNameToDom = (name) => {
  const h2 = document.querySelector('h2');
  h2.textContent = name;
};

const addEmailToDom = (email) => {
	const userEmail = document.querySelector('.email');
	userEmail.textContent = email;
}

const addLocationToDom = (location) => {
	const userLocation = document.querySelector('.location');
	userLocation.textContent = location;
}

document.querySelector('button').addEventListener('click', async () => {
  const user = await getRandomUser();
  const { first, last } = user.name;
  addNameToDom(`${first} ${last}`);
	const userEmail = await getRandomUser();
	addEmailToDom(userEmail.email);
	const userLocation = await getRandomUser();
	const { city, state, country, postcode } = userLocation.location;
	addLocationToDom(`${city} ${state} ${country} ${postcode}`);
	
});

