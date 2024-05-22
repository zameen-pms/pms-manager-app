import styled from "styled-components";

export const StyledDropdown = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	position: relative;

	label {
		font-size: 14px;
		font-weight: 600;
		letter-spacing: -0.1;
		color: var(--dark-gray);
		margin-bottom: 0.25rem;
	}

	input {
		cursor: pointer;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		outline: none;
		border: 1px solid var(--light-gray);
		caret-color: transparent;
		font-size: 1rem;
		background: white;
	}

	div.options {
		border: 1px solid var(--light-gray);
		background: white;
		border-radius: 4px;

		div.option {
			padding: 0.5rem 1rem;
			cursor: pointer;
			transition: all 0.25s ease-in-out;

			&:hover {
				background: whitesmoke;
			}
		}
	}

	svg {
		color: var(--light-gray);
		width: 20px;
		height: 20px;
		position: absolute;
		right: 5px;
		top: 32px;
	}
`;
