import styled from "styled-components";

export const StyledSideNav = styled.nav`
	position: fixed;
	left: 0;
	top: 0;
	background-color: var(--dark-gray);
	width: 300px;
	height: 100%;
	color: white;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	.bottom {
		margin-top: auto;
	}

	.nav-items {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	a {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1rem;
		color: var(--light-gray);
		text-decoration: none;
		border-radius: 10px;
		transition: all 0.3s ease-in-out;

		svg {
			width: 20px;
			height: 20px;
		}

		&:hover,
		&.active {
			color: white;
			background: rgba(255, 255, 255, 0.1);
		}
	}
`;
