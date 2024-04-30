import styled from "styled-components";

export const StyledSideNav = styled.nav`
	position: fixed;
	background: var(--dark-gray);
	width: 300px;
	height: 100vh;
	left: 0;
	padding: 20px;
	display: flex;
	flex-direction: column;

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

		&.active {
			color: white;

			svg {
				color: white;
			}
		}

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

	.side-nav-header {
		border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
		padding-bottom: 15px;

		h2 {
			font-size: 20px;
			font-weight: 600;
			color: white;
			letter-spacing: 0.1px;
			word-spacing: 3px;
			text-transform: uppercase;
			text-align: center;
		}
	}

	.side-nav-body {
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.side-nav-footer {
		padding: 20px;
		margin-top: auto;
		border-top: 0.5px solid rgba(255, 255, 255, 0.2);
	}
`;
