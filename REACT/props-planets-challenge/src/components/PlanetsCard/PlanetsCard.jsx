import styles from "./PlanetsCard.module.scss";

const PlanetsCard = ({
	planetName, 
	image, 
	distanceFromSun,
	diameterInKm, 
	numberOfMoons, 
	lengthOfYear
}) => {
	let cardClasses = styles.card;
	let imageClasses = styles.image;


	if(numberOfMoons === 0) {
		cardClasses += ` ${styles.card_no_moons}`;
	}

	return (
		<article className={cardClasses}>
			<h3>{planetName}</h3>
			<img className={imageClasses} src={image} alt="planets" />
			<p>Distance from the sun: {distanceFromSun} km</p>
			<p>Diameter: {diameterInKm} km</p>
			<p>Moons: {numberOfMoons}</p>
			<p>Length of the year: {lengthOfYear} days</p>
		</article>
	);
};

export default PlanetsCard;