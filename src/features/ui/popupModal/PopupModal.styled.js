import styled from "styled-components";

export const StyledPopupModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
	backdrop-filter: blur(10px);
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.3s ease-in-out;

	.modal {
		width: 600px;
		background: white;
		padding: 2rem;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		.close-btn {
			width: 1.5rem;
			height: 1.5rem;
			cursor: pointer;
		}
	}
`;
