import { MdArrowBack } from "react-icons/md";
import { StyledPageTitle } from "./PageTitle.styled";
import { useNavigate } from "react-router-dom";

const PageTitle = (props) => {
	const navigate = useNavigate();

	return (
		<StyledPageTitle>
			{props?.showBack && <MdArrowBack onClick={() => navigate(-1)} />}
			<h2>{props?.children || ""}</h2>
		</StyledPageTitle>
	);
};

export default PageTitle;
