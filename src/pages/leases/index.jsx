import { Navigate, Route, Routes } from "react-router-dom";
import Leases from "./Leases";
import AddLease from "./AddLease";
import Lease from "./Lease";

const LeaseHome = () => {
	return (
		<Routes>
			<Route index element={<Leases />} />
			<Route path="add" element={<AddLease />} />
			<Route path=":leaseId" element={<Lease />} />
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default LeaseHome;
