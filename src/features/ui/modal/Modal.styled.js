import styled from "styled-components";

export const StyledModal = styled.section`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;

	div.modal {
		width: 600px;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		background: white;
		border-radius: 8px;

		.modal-header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			svg {
				width: 2rem;
				height: 2rem;
				cursor: pointer;
				color: var(--light-gray);
			}
		}
	}
`;
