import { StyledProperties } from "./Properties.styled";
import PropertyCard from "./PropertyCard";

const PropertyCards = ({ properties }) => {
	return (
		<StyledProperties>
			{properties?.map((property) => (
				<PropertyCard key={property._id} property={property} />
			))}
		</StyledProperties>
	);
};

export default PropertyCards;
