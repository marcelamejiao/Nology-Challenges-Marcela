import styles from './BusinessCard.module.scss';

const BusinessCard = ( {businessCardData} ) => {

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