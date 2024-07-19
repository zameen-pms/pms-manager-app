import { v4 } from "uuid";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { StyledDropdown } from "./Dropdown.styled";
import { useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

const Dropdown = (props) => {
	const id = props?.id || v4();
	const [showOptions, setShowOptions] = useState(false);
	const inputRef = useOutsideClick(setShowOptions);

	const toggleOptions = () => {
		if (!props?.disabled) {
			setShowOptions(!showOptions);
		}
	};

	const handleClick = (option) => {
		if (!props?.disabled) {
			setShowOptions(false);
			props?.onChange && props.onChange(option);
		}
	};

	return (
		<StyledDropdown style={props?.style} ref={inputRef}>
			<label htmlFor={id}>{`${props?.label}${
				props?.required ? "*" : ""
			}`}</label>
			<input
				id={id}
				type={props?.type || "text"}
				placeholder={props?.placeholder}
				onClick={toggleOptions}
				value={props?.value}
				onChange={() => {}}
				disabled={props?.disabled}
				required={props?.required || false}
			/>
			{showOptions ? <MdArrowDropUp /> : <MdArrowDropDown />}
			{showOptions && (
				<div className="options">
					{props?.options?.map((option, index) => (
						<div
							key={option?.id || index}
							className="option"
							onClick={() => handleClick(option)}
						>
							{option?.value}
						</div>
					))}
				</div>
			)}
		</StyledDropdown>
	);
};

export default Dropdown;
