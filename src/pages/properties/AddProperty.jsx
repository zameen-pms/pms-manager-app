import { useSelector } from "react-redux";
import PropertyForm from "../../features/property/PropertyForm";
import { getUser } from "../../features/app/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import createProperty from "../../features/api/properties/createProperty";
import ControlBar from "../../features/ui/controlBar/ControlBar";

const AddProperty = () => {
	const user = useSelector(getUser);
	const navigate = useNavigate();
	const [property, setProperty] = useState({
		address: {
			street: "",
			city: "",
			state: "",
			zip: "",
		},
	});

	useEffect(() => {
		if (user?._id) {
			setProperty({ ...property, manager: user._id });
		}
	}, [user]);

	const handleSave = async (e) => {
		e?.preventDefault();
		try {
			await createProperty(user.accessToken, property);
			alert("Property has been created.");
			navigate("/properties");
		} catch (err) {
			alert("Unable to create new property.");
			console.log(err);
		}
	};

	return (
		<section className="column gap-3 padding-1">
			<ControlBar text="Back to Properties">
				<h4>Add New Property</h4>
			</ControlBar>
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
