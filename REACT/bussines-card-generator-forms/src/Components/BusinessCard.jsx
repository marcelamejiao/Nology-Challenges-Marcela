const BusinessCard = ( {businessCardData} ) => {

	return (
		<>
			<h2>
				Company Name: {businessCardData?.companyName}
			</h2>
			<p>Phone Number: {businessCardData?.phoneNumber}</p>
			<p>Email: {businessCardData?.email}</p>
			<p>Description: {businessCardData?.description}</p>
			<img src={businessCardData?.image} />
		</>
	);
};

export default BusinessCard;