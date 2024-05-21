import { Navigate, Route, Routes } from "react-router-dom";
import MaintenanceLayout from "./MaintenanceLayout";
import WorkOrders from "./WorkOrders";

const MaintenanceHome = () => {
	return (
		<Routes>
			<Route element={<MaintenanceLayout />}>
				<Route index element={<WorkOrders />} />
				<Route path="*" element={<Navigate to="" />} />
			</Route>
		</Routes>
	);
};

export default MaintenanceHome;
