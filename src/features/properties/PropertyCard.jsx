import { useEffect, useState } from "react";
import { StyledPropertyCard } from "./Properties.styled";
import { useSelector } from "react-redux";
import { getUser } from "../app/authSlice";
import getPropertyDataById from "../api/propertyData/getPropertyDataById";

const PropertyCard = ({ property }) => {
	const user = useSelector(getUser);
	const [propertyData, setPropertyData] = useState(null);
	const [availableColor, setAvailableColor] = useState("#2f3542");

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

	const fetchPropertyData = async () => {
		try {
			const { data } = await getPropertyDataById(
				user.accessToken,
				property.propertyData
			);
			setPropertyData(data);
		} catch (err) {
			console.log("Unable to fetch property.");
			console.log(err);
		}
	};

	useEffect(() => {
		property?.propertyData && fetchPropertyData();
	}, []);

	return (
		<StyledPropertyCard $availableColor={availableColor}>
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
				<p className="property-type">Single-Family</p>
				<div className="property-row">
					<div className="left row gap-05">
						<p className="property-beds">3 Bed</p>
						<p className="property-baths">2 Bath</p>
					</div>
					<div className="right">
						<p className="property-size">1,234 sqft.</p>
					</div>
				</div>
			</div>
		</StyledPropertyCard>
	);
};

export default PropertyCard;
