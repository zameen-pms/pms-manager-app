import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import Unauthorized from "./Unauthorized";

const Auth = () => {
	return (
		<Routes>
			<Route index element={<Navigate to="sign-in" />} />
			<Route path="sign-in" element={<SignIn />} />
			<Route path="unauthorized" element={<Unauthorized />} />
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default Auth;
