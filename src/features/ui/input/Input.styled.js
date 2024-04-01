import styled from "styled-components";

export const StyledInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	width: 100%;

	label {
		font-size: 14px;
		font-weight: 600;
		letter-spacing: 0.1px;
		color: #666;
	}

	input {
		font-size: 14px;
		padding: 0.75rem;
		border: 1px solid #ccc;
		outline: none;
		border-radius: 4px;
		width: 100%;

		&:focus,
		&:active {
			border-color: var(--secondary-blue);
		}

		&:disabled {
			cursor: not-allowed;
		}
	}
`;
