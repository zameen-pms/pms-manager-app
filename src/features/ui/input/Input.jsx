import { v4 } from "uuid";
import { StyledInput } from "./Input.styled";

const Input = (props) => {
	const inputId = props?.id || v4();

	return (
		<StyledInput>
			<label htmlFor={inputId}>{`${props?.label}${
				props?.required ? "*" : ""
			}`}</label>
			<input id={inputId} {...props} />
		</StyledInput>
	);
};

export default Input;
