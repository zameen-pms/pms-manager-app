import { MdArrowBack } from "react-icons/md";
import { StyledControlBar } from "./ControlBar.styled";
import { useNavigate } from "react-router-dom";

const ControlBar = (props) => {
	const navigate = useNavigate();

	return (
		<StyledControlBar>
			<div className="back-button" onClick={() => navigate(-1)}>
				<MdArrowBack />
				<p>{props?.text || "Go Back"}</p>
			</div>
			<div className="control-body">{props?.children}</div>
		</StyledControlBar>
	);
};

export default ControlBar;
