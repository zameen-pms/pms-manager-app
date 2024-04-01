import styled from "styled-components";

export const StyledButton = styled.button`
	min-width: 150px;
	white-space: nowrap;
	font-size: 14px;
	font-weight: 600;
	padding: 0.75rem;
	cursor: pointer;
	background: var(--primary-blue);
	color: white;
	outline: none;
	border: none;
	border-radius: 4px;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: var(--secondary-blue);
	}
`;
