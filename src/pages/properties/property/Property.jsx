import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getPropertyById from "../../../features/api/properties/getPropertyById";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../features/app/authSlice";
import Button from "../../../features/ui/button/Button";
import { setContent } from "../../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import PropertyForm from "../../../features/property/PropertyForm";
import updatePropertyById from "../../../features/api/properties/updatePropertyById";

const Property = () => {
	const { propertyId } = useParams();
	const user = useSelector(getUser);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [property, setProperty] = useState(null);
	const [canEdit, setCanEdit] = useState(false);

	const fetchProperty = async () => {
		try {
			const { data } = await getPropertyById(
				user.accessToken,
				propertyId
			);
			setProperty(data);
		} catch (err) {
			alert("Unable to fetch property.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	const handleSubmit = async (e) => {
		e?.preventDefault();
		try {
			await updatePropertyById(user.accessToken, propertyId, property);
			handleEditClick();
			alert("Property has been updated.");
		} catch (err) {
			alert("Unable to save property data.");
			console.log(err.message);
		}
	};

	const handleEditClick = () => {
		if (canEdit) {
			setCanEdit(false);
			fetchProperty();
		} else {
			setCanEdit(true);
		}
	};

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row justify-sb align-center">
					<div className="row align-center gap-05">
						<MdArrowBack
							className="back-arrow"
							onClick={() => navigate("/properties")}
						/>
						<h3>
							{property?.address?.street || "Property Data"} -
							Info
						</h3>
					</div>
					<div className="row align-center gap-05">
						<Button onClick={handleEditClick}>
							{canEdit ? "Cancel" : "Edit"}
						</Button>
						{canEdit && (
							<Button onClick={handleSubmit}>Save</Button>
						)}
					</div>
				</div>
			)
		);
	}, [property, canEdit]);

	return (
		<PropertyForm
			property={property}
			setProperty={setProperty}
			canEdit={canEdit}
			handleSave={handleSubmit}
		/>
	);
};

export default Property;
