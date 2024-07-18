import { useEffect, useState } from "react";
import { DropdownButton, StyledUserSearchDropdown } from "./Contracts.styled";

const UserSearchDropdown = ({ options, onChange, search }) => {
	const [filteredOptions, setFilteredOptions] = useState([]);
	const [selected, setSelected] = useState([]);

	const handleClick = (isSelected, id) => {
		if (isSelected) {
			setSelected(selected.filter((sel) => sel !== id));
		} else {
			setSelected([...selected, id]);
		}
	};

	useEffect(() => {
		onChange && onChange(selected);
	}, [selected]);

	useEffect(() => {
		if (!search || search === "") {
			setFilteredOptions(options);
		} else {
			setFilteredOptions(
				options.filter((option) =>
					`${option?.firstName} ${option?.lastName} (${option?.role})`
						.toLowerCase()
						.includes(search.toLowerCase())
				)
			);
		}
	}, [search, options]);

	return (
		<StyledUserSearchDropdown>
			{filteredOptions.map((option) => {
				const isSelected = selected.includes(option._id);
				return (
					<li key={option._id}>
						{`${option?.firstName} ${option?.lastName} (${option?.role})`}
						<DropdownButton
							$selected={isSelected}
							type="button"
							onClick={() => handleClick(isSelected, option._id)}
						>
							{isSelected ? "Unselect" : "Select"}
						</DropdownButton>
					</li>
				);
			})}
		</StyledUserSearchDropdown>
	);
};

export default UserSearchDropdown;
