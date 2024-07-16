import { StyledHeader } from "./Layout.styled";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setIsNavOpen } from "../app/globalSlice";

const Header = () => {
	const dispatch = useDispatch();

	return (
		<StyledHeader>
			<Link to="/">Zameen Management</Link>
			<MdMenu onClick={() => dispatch(setIsNavOpen(true))} />
		</StyledHeader>
	);
};

export default Header;
