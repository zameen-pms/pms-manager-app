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

export const StyledApplicationForm = styled.form`
	padding: 1rem;

	h4 {
		color: var(--primary-blue);
		margin-bottom: 1rem;
	}

	h5 {
		font-weight: 700;
		letter-spacing: 0.25px;
		font-size: 12px;
		margin-bottom: 0.25rem;
	}

	img {
		width: 100%;
		height: auto;
	}
`;

export const ApplicationGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1rem;
`;
