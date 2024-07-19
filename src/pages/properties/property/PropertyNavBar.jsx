import { NavLink } from "react-router-dom";
import { StyledPropertyNavBar } from "./Property.styled";

const PropertyNavBar = () => {
	return (
		<StyledPropertyNavBar>
			<NavLink to="info">Info</NavLink>
			<NavLink to="images">Images</NavLink>
		</StyledPropertyNavBar>
	);
};

export default PropertyNavBar;
