import React, { useEffect, useState } from 'react';
import { getPersonData } from '../services/idperson-services';

const RandomPerson = () => {
	const [personId, setPersonId] = useState("");
	const [person , setPerson] = useState(null);
	const [error, setError] = useState('');

	const refreshData = async () => {
		try {
			const personData = await getPersonData(personId);
			// with the APIs response, change the initial state 
			setPerson(personData);
		} catch (err) {
			setError(err.message)
		}
	};
	
	const handleChange = (e) => {
		setPersonId(e.target.value);
	};

	return (
		<div>
			<input type="number" value={personId} onChange={handleChange} />
			<button onClick={refreshData}>Send</button>
			<p>Name: {person?.name}</p>
			<p>Height: {person?.height}</p>
			<p>Birth Year: {person?.birth_year}</p>
			<p>Eye Color: {person?.eye_color}</p>
			<div>{error}</div>
		</div>
	);
};

export default RandomPerson;