import { useDispatch, useSelector } from "react-redux";
import PropertyForm from "../../features/property/PropertyForm";
import { getUser } from "../../features/app/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import createProperty from "../../features/api/properties/createProperty";
import { MdArrowBack } from "react-icons/md";
import { setContent } from "../../features/app/globalSlice";

const AddProperty = () => {
	const user = useSelector(getUser);
	const dispatch = useDispatch();
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

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row align-center gap-05">
					<MdArrowBack
						onClick={() => navigate(-1)}
						className="back-arrow"
					/>
					<h3>Add New Property</h3>
				</div>
			)
		);
	}, []);

	return (
		<PropertyForm
			property={property}
			setProperty={setProperty}
			canEdit={true}
			handleSave={handleSave}
		/>
	);
};

export default AddProperty;
