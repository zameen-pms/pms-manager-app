import { Navigate, Route, Routes } from "react-router-dom";
import MaintenanceLayout from "./MaintenanceLayout";
import WorkOrders from "./WorkOrders";
import WorkOrder from "./WorkOrder";

const MaintenanceHome = () => {
	return (
		<Routes>
			<Route element={<MaintenanceLayout />}>
				<Route index element={<WorkOrders />} />
				<Route path=":id" element={<WorkOrder />} />
				<Route path="*" element={<Navigate to="" />} />
			</Route>
		</Routes>
	);
};

export default MaintenanceHome;
