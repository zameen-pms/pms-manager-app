import styled from "styled-components";

export const StyledSideNav = styled.nav`
	position: fixed;
	z-index: 10;
	width: 300px;
	height: 100vh;
	right: ${(props) => (props.$navOpen ? "0" : "-300px")};
	top: 0;
	background: var(--dark-gray);
	display: flex;
	flex-direction: column;
	transition: all 0.25s ease-in-out;

	.side-nav-header {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
		padding: 0 2rem;
		height: 75px;

		svg {
			color: white;
			width: 30px;
			height: 30px;
			cursor: pointer;
		}
	}

	.side-nav-body {
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.nav-item {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
		width: 100%;
		color: var(--light-gray);
		cursor: pointer;
		text-decoration: none;
		transition: all 0.25s ease-in-out;

		svg {
			color: gray;
			height: 22px;
			width: auto;
		}

		&:hover {
			color: white;

			svg {
				color: white;
			}
		}
	}

	.side-nav-footer {
		padding: 20px;
		margin-top: auto;
		border-top: 0.5px solid rgba(255, 255, 255, 0.2);
	}

	@media (max-width: 760px) {
		width: 100vw;
		right: ${(props) => (props.$navOpen ? "0" : "-100vw")};
		font-size: 22px;

		.side-nav-body {
			gap: 3rem;
			text-align: center;
		}
	}
`;
