import styled from "styled-components";

export const StyledFileUpload = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	label {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
		border: 2px solid var(--primary-blue);
		color: var(--primary-blue);
		padding: 0.5rem 1.5rem;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: all 0.25s ease-in-out;
		width: min-content;
		white-space: nowrap;

		svg {
			width: 24px;
			height: 24px;
			color: var(--primary-blue);
		}

		&:hover {
			background: var(--primary-blue);
			color: white;

			svg {
				color: white;
			}
		}
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		p {
			font-weight: 600;
			text-decoration: underline;
			letter-spacing: 0.2px;
		}

		li {
			color: #e74c3c;
		}
	}
`;
