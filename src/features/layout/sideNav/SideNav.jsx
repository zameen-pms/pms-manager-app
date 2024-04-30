import { Link, NavLink, useNavigate } from "react-router-dom";
import { StyledSideNav } from "./SideNav.styled";
import {
	MdHome,
	MdLogout,
	MdOutlineCarpenter,
	MdOutlineMessage,
} from "react-icons/md";
import useLogout from "../../auth/useLogout";

const SideNav = () => {
	const logout = useLogout();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			navigate("/");
		} catch (err) {
			alert("Unable to logout at this time.");
			console.log(err.message);
		}
	};

	return (
		<StyledSideNav>
			<div className="side-nav-header">
				<h2>Zameen Management</h2>
			</div>
			<div className="side-nav-body">
				<NavLink className="nav-item" to="properties">
					<MdHome />
					Properties
				</NavLink>
				<NavLink className="nav-item" to="maintenance">
					<MdOutlineCarpenter />
					Maintenance Requests
				</NavLink>
				<NavLink className="nav-item" to="messages">
					<MdOutlineMessage />
					Messages
				</NavLink>
			</div>
			<div className="side-nav-footer">
				<Link onClick={handleLogout} className="nav-item">
					<MdLogout />
					Sign Out
				</Link>
			</div>
		</StyledSideNav>
	);
};

export default SideNav;
