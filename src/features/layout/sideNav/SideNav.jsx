import { Link, NavLink, useNavigate } from "react-router-dom";
import { StyledSideNav } from "./SideNav.styled";
import { MdHome, MdLogout, MdPeople } from "react-icons/md";
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
			<h3>Zameen</h3>
			<div className="nav-items">
				<NavLink to="/tenants">
					<MdPeople />
					<p>Tenants</p>
				</NavLink>
				<NavLink to="/properties">
					<MdHome />
					<p>Properties</p>
				</NavLink>
			</div>
			<div className="bottom">
				<Link onClick={handleLogout}>
					<MdLogout />
					<p>Logout</p>
				</Link>
			</div>
		</StyledSideNav>
	);
};

export default SideNav;
