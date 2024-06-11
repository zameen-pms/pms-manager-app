import { useSelector } from "react-redux";
import { StyledControlBar } from "./ControlBar.styled";
import { getContent } from "../../app/globalSlice";

const ControlBar = () => {
	const content = useSelector(getContent);

	return <StyledControlBar>{content || ""}</StyledControlBar>;
};

export default ControlBar;
