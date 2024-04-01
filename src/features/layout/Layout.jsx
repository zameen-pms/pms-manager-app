import { Outlet } from "react-router-dom";
import { StyledBody, StyledLayout } from "./Layout.styled";
import SideNav from "./sideNav/SideNav";

const Layout = () => {
	return (
		<StyledLayout>
			<SideNav />
			<StyledBody>
				<Outlet />
			</StyledBody>
		</StyledLayout>
	);
};

export default Layout;
