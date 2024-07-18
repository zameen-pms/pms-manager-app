import styled from "styled-components";

export const StyledUserSearchDropdown = styled.ul`
	border: 1px solid #ccc;
	border-radius: 4px;
	max-height: 400px;
	overflow-y: scroll;

	li {
		list-style: none;
		padding: 0.5rem;
		transition: all 0.25s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: space-between;

		&:hover {
			background-color: #ccc;
		}
	}
`;

export const DropdownButton = styled.button`
	cursor: pointer;
	padding: 8px 16px;
	color: white;
	border: none;
	border-radius: 4px;
	font-size: 12px;
	font-weight: 500;
	background: ${(props) => (props.$selected ? "#c0392b" : "#27ae60")};
	transition: all 0.25s ease-in-out;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
			rgba(0, 0, 0, 0.23) 0px 3px 6px;
	}
`;
