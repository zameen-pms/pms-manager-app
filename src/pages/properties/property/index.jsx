import { Navigate, Route, Routes } from "react-router-dom";
import Property from "./Property";
import PropertyLayout from "./PropertyLayout";
import PropertyDocumentsHome from "./documents";
import PropertyImages from "./PropertyImages";

const PropertyHome = () => {
	return (
		<Routes>
			<Route element={<PropertyLayout />}>
				<Route index element={<Navigate to="info" />} />
				<Route path="documents/*" element={<PropertyDocumentsHome />} />
				<Route path="images" element={<PropertyImages />} />
				<Route path="info" element={<Property />} />
				<Route path="*" element={<Navigate to="" />} />
			</Route>
		</Routes>
	);
};

export default PropertyHome;
