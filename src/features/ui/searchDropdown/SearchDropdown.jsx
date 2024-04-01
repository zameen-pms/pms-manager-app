import { useEffect, useState } from "react";
import { StyledSearchDropdown } from "./SearchDropdown.styled";
import { MdSearch } from "react-icons/md";

const SearchDropdown = ({
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
	const [results, setResults] = useState([]);

	useEffect(() => {
		setResults(
			options?.filter((item) =>
				item.toLowerCase().includes(value?.toLowerCase())
			)
		);
	}, [value]);

	const handleResultClick = (result) => {
		setValue(result);
	};

	return (
		<StyledSearchDropdown>
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
				<MdSearch className="search" />
				{isFocused && (
					<div className="results">
						{results.length === 0 ? (
							<p>No Results.</p>
						) : (
							results?.map((result, index) => (
								<p
									onClick={() => handleResultClick(result)}
									key={index}
								>
									{result}
								</p>
							))
						)}
					</div>
				)}
			</div>
		</StyledSearchDropdown>
	);
};

export default SearchDropdown;
