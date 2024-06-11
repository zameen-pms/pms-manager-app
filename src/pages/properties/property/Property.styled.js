import styled from "styled-components";

export const StyledPropertyLayout = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	height: 100%;

	.property-body {
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
`;

export const StyledPropertyNavBar = styled.nav`
	background: white;
	display: flex;
	gap: 1.5rem;

	a {
		color: gray;
		text-decoration: none;
		transition: 0.25s all ease-in-out;
		padding: 4px 12px;
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0.1px;
		border-radius: 4px;

		&:hover {
			color: var(--primary-blue);
		}

		&.active {
			color: white;
			background: var(--primary-blue);
		}
	}
`;
