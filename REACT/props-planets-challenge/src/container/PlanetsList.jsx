import PlanetsCard from "../components/PlanetsCard/PlanetsCard.jsx"
import planets from "../data/planets.json";
import styles from "./PlanetsList.module.scss";

const PlanetsList = () => {
	const sortedPlanets = planets.sort((planetA, planetB) => {
		if(planetA.diameterInKm === planetB.diameterInKm) {
			return 0;
		}
		if(planetA.diameterInKm < planetB.diameterInKm) {
			return -1;
		}
		if(planetA.diameterInKm > planetB.diameterInKm) {
			return 1;
		}
	});
	
	return (
		<div className={styles.wrap}>
			
			{sortedPlanets.map((planet, index) => {
				return <PlanetsCard 
					key={`planet-${index}`}
					planetName={planet.planetName}
					image={planet.image}
					distanceFromSun={planet.distanceFromSun}
					diameterInKm={planet.diameterInKm}
					numberOfMoons={planet.numberOfMoons}
					lengthOfYear={planet.lengthOfYear}
				/>
			})}
		</div>
	);
};

export default PlanetsList;