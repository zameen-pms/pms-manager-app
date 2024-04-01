import { useParams } from "react-router-dom";
import PageTitle from "../../features/ui/pageTitle/PageTitle";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../features/app/authSlice";
import getPropertyById from "../../features/api/properties/getPropertyById";
import Button from "../../features/ui/button/Button";
import PropertyForm from "../../features/property/PropertyForm";
import updatePropertyById from "../../features/api/properties/updatePropertyById";
import UnitsModule from "../../features/property/units/UnitsModule";

const Property = () => {
	const { propertyId } = useParams();
	const [property, setProperty] = useState({});
	const user = useSelector(getUser);
	const [canEdit, setCanEdit] = useState(false);

	const fetchProperty = async () => {
		try {
			const response = await getPropertyById(
				user.accessToken,
				propertyId
			);
			setProperty(response.data);
		} catch (err) {
			alert("Unable to fetch property.");
			console.log(err.message);
		}
	};

	const updateProperty = async () => {
		try {
			await updatePropertyById(user.accessToken, propertyId, property);
		} catch (err) {
			alert("Unable to update property.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	const handleCancel = async () => {
		try {
			await fetchProperty();
		} catch (err) {
			console.log(err.message);
		} finally {
			setCanEdit(false);
		}
	};

	const handleSave = async (e) => {
		e?.preventDefault();
		try {
			await updateProperty();
			alert("Property has been updated.");
			await fetchProperty();
		} catch (err) {
			alert("Unable to save property data.");
			console.log(err.message);
		} finally {
			setCanEdit(false);
		}
	};

	return (
		<section className="column gap-3">
			<div className="row justify-sb align-center">
				<PageTitle showBack>Property Information</PageTitle>
				{canEdit ? (
					<Button onClick={handleCancel}>Cancel</Button>
				) : (
					<Button onClick={() => setCanEdit(true)}>Edit</Button>
				)}
			</div>
			<PropertyForm
				property={property}
				setProperty={setProperty}
				canEdit={canEdit}
				handleSave={handleSave}
			/>
			<UnitsModule property={property} />
		</section>
	);
};

export default Property;
