import { Outlet } from "react-router-dom";
import { StyledBody, StyledContent } from "./Layout.styled";
import ControlBar from "./controlBar/ControlBar";
import Header from "./Header";
import SideNav from "./sideNav/SideNav";

const Layout = () => {
	return (
		<>
			<Header />
			<SideNav />
			<StyledBody>
				<ControlBar />
				<StyledContent>
					<Outlet />
				</StyledContent>
			</StyledBody>
		</>
	);
};

export default Layout;
