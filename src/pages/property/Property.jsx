import { useParams } from "react-router-dom";
import PageTitle from "../../features/ui/pageTitle/PageTitle";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../features/app/authSlice";
import Button from "../../features/ui/button/Button";
import PropertyForm from "../../features/property/PropertyForm";
import getSingleFamilyById from "../../features/api/singleFamilies/getSingleFamilyById";

const Property = () => {
	const { propertyId } = useParams();
	const [property, setProperty] = useState(null);
	const user = useSelector(getUser);
	const [canEdit, setCanEdit] = useState(false);

	const fetchProperty = async () => {
		try {
			const { data } = await getSingleFamilyById(
				user.accessToken,
				propertyId
			);
			setProperty(data);
		} catch (err) {
			alert("Unable to fetch property.");
			console.log(err);
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	const handleSave = async (e) => {
		e?.preventDefault();
	};

	return (
		<section className="column gap-3">
			<div className="row justify-sb align-center">
				<PageTitle showBack>Property Information</PageTitle>
			</div>
			{property ? (
				<PropertyForm
					property={property}
					setProperty={setProperty}
					canEdit={canEdit}
					handleSave={handleSave}
				/>
			) : (
				<h4>Loading...</h4>
			)}
		</section>
	);
};

export default Property;
