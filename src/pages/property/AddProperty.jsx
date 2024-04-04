import { useSelector } from "react-redux";
import PropertyForm from "../../features/property/PropertyForm";
import PageTitle from "../../features/ui/pageTitle/PageTitle";
import { getUser } from "../../features/app/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import createProperty from "../../features/api/properties/createProperty";
import addUnit from "../../features/api/units/addUnit";
import updatePropertyById from "../../features/api/properties/updatePropertyById";

const AddProperty = () => {
	const user = useSelector(getUser);
	const navigate = useNavigate();
	const [property, setProperty] = useState({
		name: "",
		location: {
			street: "",
			city: "",
			state: "",
			zip: "",
		},
		type: "Single-Family",
		manager: "",
	});

	useEffect(() => {
		if (user?._id) {
			setProperty({ ...property, manager: user._id });
		}
	}, []);

	const handleSave = async (e) => {
		e?.preventDefault();
		try {
			const { data: propertyData } = await createProperty(
				user.accessToken,
				property
			);
			const { data: unitData } = await addUnit(user.accessToken, {
				property: propertyData._id,
			});
			await updatePropertyById(user.accessToken, propertyData._id, {
				units: [unitData._id],
			});
			alert("Property has been created.");
			navigate("/properties");
		} catch (err) {
			alert("Unable to create new property.");
			console.log(err);
		}
	};

	return (
		<section className="column gap-3">
			<PageTitle showBack>Create New Property</PageTitle>
			<PropertyForm
				property={property}
				setProperty={setProperty}
				canEdit={true}
				handleSave={handleSave}
			/>
		</section>
	);
};

export default AddProperty;
