import styled from "styled-components";

export const StyledControlBar = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;

	.back-button {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;

		svg {
			color: gray;
		}

		p {
			color: gray;
			font-size: 14px;
		}
	}

	.control-body {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;
