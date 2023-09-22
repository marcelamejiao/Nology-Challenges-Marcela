import styles from './BusinessCard.module.scss';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContextProvider';

const BusinessCard = ( ) => {
	const {businessCardData} = useContext(SearchContext);
	let cardClasses = styles.card;

	return (
		<>
			<div className={cardClasses}>
				<h2>
					Company Name: {businessCardData?.companyName}
				</h2>
				<p>Phone Number: {businessCardData?.phoneNumber}</p>
				<p>Email: {businessCardData?.email}</p>
				<p>Description: {businessCardData?.description}</p>
				<img src={businessCardData?.image} />
			</div>
		</>
	);
};

export default BusinessCard;