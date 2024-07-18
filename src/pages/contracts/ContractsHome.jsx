import { Navigate, Route, Routes } from "react-router-dom";
import Contracts from "./Contracts";
import AddContract from "./AddContract";
import Contract from "./Contract";

const ContractsHome = () => {
	return (
		<Routes>
			<Route index element={<Contracts />} />
			<Route path="add" element={<AddContract />} />
			<Route path=":contractId" element={<Contract />} />
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default ContractsHome;
