import styled from "styled-components";

export const StyledDropdown = styled.div`
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
		cursor: pointer;

		&:focus,
		&:active {
			border-color: var(--secondary-blue);
		}

		&:disabled {
			cursor: not-allowed;
		}
	}

	svg {
		position: absolute;
		right: 0.5rem;
		top: 10px;
		width: 1.5rem;
		height: 1.5rem;
		color: #888;
	}

	.results {
		border: 1px solid #ccc;
		max-height: 300px;
		overflow-y: scroll;

		p {
			font-size: 14px;
			padding: 0.75rem;
			width: 100%;
			cursor: pointer;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: #eee;
			}
		}
	}
`;
