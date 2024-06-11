import { Navigate, Route, Routes, useParams } from "react-router-dom";
import PropertyDocuments from "./PropertyDocuments";
import PropertyDocument from "./PropertyDocument";
import AddPropertyDocument from "./AddPropertyDocument";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUser } from "../../../../features/app/authSlice";
import getPropertyById from "../../../../features/api/properties/getPropertyById";

const PropertyDocumentsHome = () => {
	const { propertyId } = useParams();
	const { accessToken } = useSelector(getUser);
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

	return (
		<Routes>
			<Route index element={<PropertyDocuments property={property} />} />
			<Route
				path=":documentId"
				element={<PropertyDocument property={property} />}
			/>
			<Route
				path="add"
				element={<AddPropertyDocument property={property} />}
			/>
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default PropertyDocumentsHome;
