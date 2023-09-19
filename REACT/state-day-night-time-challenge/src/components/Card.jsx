import {useState} from "react";
import styles from "./Card.module.scss";

const Card = ( { title } ) => {
	console.log(title);
	const [time, setTime] = useState(0);
	const [icon, setIcon] = useState('sun.svg');
	const [darkMode, setDarkMode] = useState(false);

	const randomTime = () => {
		const hour = Math.floor(Math.random() * (25));
		setTime(hour);
		console.log(hour);
		if(hour >= 6 && hour <= 18) {
			setIcon('sun.svg');
			setDarkMode(false);
		} else {
			setIcon('moon.svg')
			setDarkMode(true);
		}
	};

	let cardClasses = styles.card;

	if(darkMode) {
		cardClasses += ` ${styles.card_dark_mode}`;
	}

	return (
		<>
			<div className={cardClasses}>
				<h2>{title}</h2>
				<img src={icon} alt="icon" />
				<button onClick={randomTime}>Random time</button>
				<p>{time} hrs.</p>
			</div>
		</>
	);
};

export default Card;