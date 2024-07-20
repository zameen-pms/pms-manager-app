import { Link, useNavigate } from "react-router-dom";
import { StyledSideNav } from "./SideNav.styled";
import {
	MdClose,
	MdEditDocument,
	MdFileCopy,
	MdHome,
	MdLogout,
	MdPerson,
} from "react-icons/md";
import useLogout from "../../auth/useLogout";
import { useDispatch, useSelector } from "react-redux";
import { getIsNavOpen, setIsNavOpen } from "../../app/globalSlice";

const SideNav = () => {
	const logout = useLogout();
	const navigate = useNavigate();
	const isNavOpen = useSelector(getIsNavOpen);
	const dispatch = useDispatch();

	const handleLogout = async () => {
		try {
			await logout();
			navigate("/");
		} catch (err) {
			alert("Unable to logout at this time.");
			console.log(err.message);
		}
	};

	const navigateTo = (to) => {
		navigate(to);
		dispatch(setIsNavOpen(false));
	};

	return (
		<StyledSideNav $navOpen={isNavOpen}>
			<div className="side-nav-header">
				<MdClose onClick={() => dispatch(setIsNavOpen(false))} />
			</div>
			<div className="side-nav-body">
				<p
					className="nav-item"
					onClick={() => navigateTo("properties")}
				>
					<MdHome />
					Properties
				</p>
				<p
					className="nav-item"
					onClick={() => navigateTo("applications")}
				>
					<MdFileCopy />
					Applications
				</p>
				<p className="nav-item" onClick={() => navigateTo("users")}>
					<MdPerson />
					Users
				</p>
				<p className="nav-item" onClick={() => navigateTo("contracts")}>
					<MdEditDocument />
					Contracts
				</p>
				<p className="nav-item" onClick={() => navigateTo("leases")}>
					<MdEditDocument />
					Leases
				</p>
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
