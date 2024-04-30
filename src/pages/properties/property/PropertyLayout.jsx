import { Outlet } from "react-router-dom";
import { StyledPropertyLayout } from "./Property.styled";
import PropertyNavBar from "./PropertyNavBar";

const PropertyLayout = () => {
	return (
		<StyledPropertyLayout>
			<PropertyNavBar />
			<div className="property-body">
				<Outlet />
			</div>
		</StyledPropertyLayout>
	);
};

export default PropertyLayout;
