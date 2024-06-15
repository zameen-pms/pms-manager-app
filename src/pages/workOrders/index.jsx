import { Navigate, Route, Routes } from "react-router-dom";
import WorkOrders from "./WorkOrders";
import AddWorkOrder from "./AddWorkOrder";
import WorkOrder from "./WorkOrder";

const WorkOrdersHome = () => {
	return (
		<Routes>
			<Route index element={<WorkOrders />} />
			<Route path="add" element={<AddWorkOrder />} />
			<Route path=":workOrderId" element={<WorkOrder />} />
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default WorkOrdersHome;
