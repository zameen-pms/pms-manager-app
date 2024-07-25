import { Navigate, Route, Routes } from "react-router-dom";
import Users from "./Users";
import User from "./User";

const UsersHome = () => {
	return (
		<Routes>
			<Route index element={<Users />} />
			<Route path=":userId" element={<User />} />
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default UsersHome;
