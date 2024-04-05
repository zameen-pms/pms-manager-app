import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { StyledDropdown } from "./Dropdown.styled";

const Dropdown = ({
	id,
	label,
	required,
	placeholder,
	disabled,
	options,
	value,
	setValue,
	onChange,
}) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleResultClick = (result) => {
		setValue(result);
	};

	return (
		<StyledDropdown>
			<label htmlFor={id || ""}>{`${label}${required ? "*" : ""}`}</label>
			<div>
				<input
					id={id}
					value={value || ""}
					placeholder={placeholder || ""}
					disabled={disabled || false}
					onChange={onChange}
					onFocus={() => setIsFocused(true)}
					onBlur={() =>
						setTimeout(() => {
							setIsFocused(false);
						}, 150)
					}
				/>
				{isFocused ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
				{isFocused && (
					<div className="results">
						{options?.map((result, index) => (
							<p
								onClick={() => handleResultClick(result)}
								key={index}
								style={{ width: "100%" }}
							>
								{result}
							</p>
						))}
					</div>
				)}
			</div>
		</StyledDropdown>
	);
};

export default Dropdown;
