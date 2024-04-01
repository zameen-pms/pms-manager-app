import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { StyledDropdown } from "./Dropdown.styled";

const Dropdown = ({
	id,
	label,
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
			<label htmlFor={id || ""}>{label || ""}</label>
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
