import { Navigate, Route, Routes } from "react-router-dom";
import Applications from "./Applications";

const ApplicationsHome = () => {
	return (
		<Routes>
			<Route index element={<Applications />} />
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default ApplicationsHome;
