import styled from "styled-components";

export const StyledIncomeFile = styled.div`
	svg {
		color: black;
		cursor: pointer;
		width: 25px;
		height: 25px;
		transition: all 0.25s ease-in-out;

		&:hover {
			color: #3498db;
		}
	}

	img {
		max-height: 80vh;
		width: auto;
	}
`;
