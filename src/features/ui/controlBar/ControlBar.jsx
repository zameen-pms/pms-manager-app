import { StyledControlBar } from "./ControlBar.styled";
import { useNavigate } from "react-router-dom";

const ControlBar = (props) => {
	const navigate = useNavigate();

	return (
		<StyledControlBar>
			<div className="control-body">{props?.children}</div>
		</StyledControlBar>
	);
};

export default ControlBar;
