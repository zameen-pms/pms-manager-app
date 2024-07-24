import styled from "styled-components";

export const StyledPropertyForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	h4 {
		font-weight: 400;
	}

	.delete-icon {
		background: #e74c3c;
		width: 42px;
		height: 42px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		border-radius: 4px;
		transition: all 0.25s ease-in-out;

		&:hover {
			box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.2);
		}

		svg {
			width: 1.5rem;
			height: 1.5rem;
			color: white;
		}
	}
`;
