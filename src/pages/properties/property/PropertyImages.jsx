import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../features/app/authSlice";
import getPropertyById from "../../../features/api/properties/getPropertyById";
import { setContent } from "../../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import UploadPropertyImages from "../../../features/properties/PropertyImages";

const PropertyImages = () => {
	const { propertyId } = useParams();
	const { accessToken } = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [property, setProperty] = useState(null);

	const fetchProperty = async () => {
		try {
			const { data } = await getPropertyById(accessToken, propertyId);
			setProperty(data);
		} catch (err) {
			alert("Unable to fetch property.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row align-center gap-05">
					<MdArrowBack
						className="back-arrow"
						onClick={() => navigate("/properties")}
					/>
					<h3>
						{property?.address?.street || "Property Data"} - Images
					</h3>
				</div>
			)
		);
	}, [property]);

	if (!property) return <p>Loading property...</p>;

	return (
		<UploadPropertyImages
			property={property}
			fetchProperty={fetchProperty}
		/>
	);
};

export default PropertyImages;
