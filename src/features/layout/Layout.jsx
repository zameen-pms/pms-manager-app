import { Outlet } from "react-router-dom";
import { StyledBody, StyledLayout, StyledOutlet } from "./Layout.styled";
import SideNav from "./sideNav/SideNav";
import ControlBar from "./controlBar/ControlBar";
import {
	MdContactPage,
	MdEditDocument,
	MdHomeWork,
	MdPerson,
	MdRequestPage,
} from "react-icons/md";

const navItems = [
	{
		name: "Properties",
		url: "/properties",
		icon: <MdHomeWork />,
	},
	{
		name: "Users",
		url: "/users",
		icon: <MdPerson />,
	},
	{
		name: "Applications",
		url: "/applications",
		icon: <MdContactPage />,
	},
	{
		name: "Leases",
		url: "/leases",
		icon: <MdRequestPage />,
	},
	{
		name: "Contracts",
		url: "/contracts",
		icon: <MdEditDocument />,
	},
];

const Layout = () => {
	return (
		<StyledLayout>
			<SideNav navItems={navItems} />
			<StyledBody>
				<ControlBar />
				<StyledOutlet>
					<Outlet />
				</StyledOutlet>
			</StyledBody>
		</StyledLayout>
	);
};

export default Layout;
