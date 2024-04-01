import { Navigate, Route, Routes } from "react-router-dom";
import Properties from "./Properties";
import Property from "./Property";
import AddUnit from "./AddUnit";
import AddProperty from "./AddProperty";

const PropertyHome = () => {
	return (
		<Routes>
			<Route index element={<Properties />} />
			<Route path="add" element={<AddProperty />} />
			<Route path=":propertyId/*">
				<Route index element={<Property />} />
				<Route path="add" element={<AddUnit />} />
				<Route path="*" element={<Navigate to="" />} />
			</Route>
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default PropertyHome;
