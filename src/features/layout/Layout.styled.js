import styled from "styled-components";

export const StyledHeader = styled.header`
	width: 100%;
	height: 75px;
	background-color: var(--dark-gray);
	padding: 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 1080px) {
		padding: 1rem;
	}

	a {
		color: white;
		text-decoration: none;
		font-size: 20px;
		font-size: 400;
		text-transform: uppercase;
		letter-spacing: 0.2px;
	}

	svg {
		color: white;
		cursor: pointer;
		width: 30px;
		height: 30px;
	}
`;

export const StyledBody = styled.section`
	flex: 1;
	width: 100%;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const StyledContent = styled.section`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;
