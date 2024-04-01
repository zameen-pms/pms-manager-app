import { StyledInput } from "./Input.styled";

const Input = (props) => {
	return (
		<StyledInput>
			<label htmlFor={props?.id || ""}>{props?.label || ""}</label>
			<input {...props} />
		</StyledInput>
	);
};

export default Input;
