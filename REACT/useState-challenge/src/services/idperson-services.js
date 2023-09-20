export const getPersonData = async (id) => {
	
	const response = await fetch (`https://swapi.dev/api/people/${id}`, {
		headers: {
			Accept: 'application/json',
		}
	});

	if (!response.ok) {
    throw new Error('Failed to fetch this ID');
  }
  const data = await response.json();
  return data;
}
