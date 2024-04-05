import { useParams } from "react-router-dom";
import PageTitle from "../../features/ui/pageTitle/PageTitle";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../features/app/authSlice";
import Button from "../../features/ui/button/Button";
import PropertyForm from "../../features/property/PropertyForm";

const Property = () => {
	const { propertyId } = useParams();
	const [property, setProperty] = useState({});
	const user = useSelector(getUser);
	const [canEdit, setCanEdit] = useState(false);

	return (
		<section className="column gap-3">
			<div className="row justify-sb align-center">
				<PageTitle showBack>Property Information</PageTitle>
			</div>
			<PropertyForm
				property={property}
				setProperty={setProperty}
				canEdit={canEdit}
			/>
		</section>
	);
};

export default Property;
