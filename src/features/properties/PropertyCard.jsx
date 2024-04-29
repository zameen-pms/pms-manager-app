import { useEffect, useState } from "react";
import { StyledPropertyCard } from "./Properties.styled";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
	const navigate = useNavigate();
	const [availableColor, setAvailableColor] = useState("#2f3542");

	const handleClick = () => {
		navigate(`/properties/${property?._id}`);
	};

	useEffect(() => {
		if (property?.availability) {
			switch (property.availability) {
				case "Available":
					setAvailableColor("#27ae60");
					break;
				case "Unavailable":
					setAvailableColor("#c0392b");
					break;
				case "Occupied":
					setAvailableColor("#2980b9");
					break;
				default:
					setAvailableColor("#2f3542");
					break;
			}
		}
	}, [property]);

	return (
		<StyledPropertyCard
			$availableColor={availableColor}
			onClick={handleClick}
		>
			<div className="card-header">
				<img
					src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt="house"
				/>
				<p className="property-availability">
					{property?.availability || ""}
				</p>
			</div>
			<div className="card-body">
				<h4>{`${property?.address?.street} ${property?.address?.city}, ${property?.address?.state} ${property?.address?.zip}`}</h4>
			</div>
		</StyledPropertyCard>
	);
};

export default PropertyCard;
