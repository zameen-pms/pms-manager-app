import { Navigate, Route, Routes } from "react-router-dom";
import Properties from "./Properties";
import Property from "./Property";
import AddProperty from "./AddProperty";

const PropertyHome = () => {
	return (
		<Routes>
			<Route index element={<Properties />} />
			<Route path="add" element={<AddProperty />} />
			<Route path=":propertyId" element={<Property />} />
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default PropertyHome;
