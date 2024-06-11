import { Outlet } from "react-router-dom";
import { StyledBody, StyledContent, StyledLayout } from "./Layout.styled";
import SideNav from "./sideNav/SideNav";
import ControlBar from "./controlBar/ControlBar";

const Layout = () => {
	return (
		<StyledLayout>
			<SideNav />
			<StyledBody>
				<ControlBar />
				<StyledContent>
					<Outlet />
				</StyledContent>
			</StyledBody>
		</StyledLayout>
	);
};

export default Layout;
