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
		margin-bottom: 0.5rem;
		font-weight: 400;
		font-size: 22px;
	}

	.img-container {
		width: 33%;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		p {
			text-align: center;
			color: var(--primary-blue);
			cursor: pointer;

			&:hover {
				text-decoration: underline;
			}
		}

		img {
			width: 100%;
			height: auto;
		}
	}
`;

export const ApplicationSection = styled.section`
	display: flex;
	flex-direction: column;
`;

export const ApplicationGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 1rem;
`;
