import { NavLink } from "react-router-dom";
import { StyledPropertyNavBar } from "./Property.styled";

const PropertyNavBar = () => {
	return (
		<StyledPropertyNavBar>
			<NavLink to="info">Info</NavLink>
			<NavLink to="documents">Documents</NavLink>
		</StyledPropertyNavBar>
	);
};

export default PropertyNavBar;
