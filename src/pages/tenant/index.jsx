import { Navigate, Route, Routes } from "react-router-dom";
import Tenants from "./Tenants";
import Tenant from "./Tenant";

const TenantsHome = () => {
	return (
		<Routes>
			<Route index element={<Tenants />} />
			<Route path=":tenantId" element={<Tenant />} />
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default TenantsHome;
