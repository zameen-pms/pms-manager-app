import { Navigate, Route, Routes } from "react-router-dom";
import Property from "./Property";
import RentalHistory from "./RentalHistory";
import PropertyLayout from "./PropertyLayout";
import LeaseHistory from "./LeaseHistory";
import MaintenanceHistory from "./MaintenanceHistory";

const PropertyHome = () => {
	return (
		<Routes>
			<Route element={<PropertyLayout />}>
				<Route index element={<Navigate to="info" />} />
				<Route path="info" element={<Property />} />
				<Route path="rental-history" element={<RentalHistory />} />
				<Route path="lease-history" element={<LeaseHistory />} />
				<Route path="maintenance" element={<MaintenanceHistory />} />
				<Route path="*" element={<Navigate to="" />} />
			</Route>
		</Routes>
	);
};

export default PropertyHome;
