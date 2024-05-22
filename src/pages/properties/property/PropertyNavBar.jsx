import { NavLink } from "react-router-dom";
import { StyledPropertyNavBar } from "./Property.styled";

const PropertyNavBar = () => {
	return (
		<StyledPropertyNavBar>
			<NavLink to="info">Info</NavLink>
			<NavLink to="rental-history">Rental History</NavLink>
			<NavLink to="lease-history">Lease History</NavLink>
		</StyledPropertyNavBar>
	);
};

export default PropertyNavBar;
