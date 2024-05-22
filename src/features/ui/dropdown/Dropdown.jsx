import { v4 } from "uuid";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { StyledDropdown } from "./Dropdown.styled";
import { useEffect, useRef, useState } from "react";

const Dropdown = (props) => {
	const id = props?.id || v4();
	const inputRef = useRef(null);
	const [showOptions, setShowOptions] = useState(false);

	const handleOutsideClick = (e) => {
		if (inputRef.current && !inputRef.current.contains(e.target)) {
			setShowOptions(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	});

	const toggleOptions = () => setShowOptions(!showOptions);

	const handleClick = (option) => {
		setShowOptions(false);
		props?.onChange && props.onChange(option);
	};

	return (
		<StyledDropdown style={props?.style} ref={inputRef}>
			<label htmlFor={id}>{props?.label}</label>
			<input
				id={id}
				type={props?.type || "text"}
				placeholder={props?.placeholder}
				onClick={toggleOptions}
				value={props?.value}
				onChange={() => {}}
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
