import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Auth from "./pages/auth";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import Layout from "./features/layout/Layout";
import PropertiesHome from "./pages/properties";
import UsersHome from "./pages/users";

const App = () => {
	return (
		<Routes>
			{/* public routes */}
			<Route index element={<Home />} />
			<Route path="auth/*" element={<Auth />} />

			{/* private routes */}
			<Route element={<PersistLogin />}>
				<Route element={<RequireAuth allowedRoles={["Manager"]} />}>
					<Route path="/" element={<Layout />}>
						<Route index element={<Navigate to="properties" />} />
						<Route
							path="properties/*"
							element={<PropertiesHome />}
						/>
						<Route path="users/*" element={<UsersHome />} />
					</Route>
				</Route>
			</Route>

			{/* catch-all */}
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default App;
