import styled from "styled-components";

export const StyledNav = styled.nav`
	background: var(--dark-gray);
	width: 250px;
	height: 100%;
	color: white;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 1rem;

	header {
		text-align: center;
		font-size: 20px;
		font-weight: 500;

		a {
			img {
				width: 100%;
				height: auto;
			}
		}
	}

	ul {
		a {
			display: flex;
			align-items: center;
			border: 1px solid var(--dark-gray);
			gap: 1rem;
			font-size: 14px;
			padding: 8px 12px;
			color: white;
			border-radius: 8px;
			transition: all 0.25s ease-in-out;
			text-decoration: none;

			&:hover,
			&.active {
				cursor: pointer;
				background: rgba(255, 255, 255, 0.05);
				border-color: #999;
			}

			svg {
				width: 22px;
				height: 22px;
			}
		}
	}

	.nav-signout {
		margin-top: auto;
		display: flex;
		align-items: center;
		border: 1px solid var(--dark-gray);
		gap: 1rem;
		font-size: 14px;
		padding: 8px 12px;
		color: white;
		border-radius: 8px;
		transition: all 0.25s ease-in-out;
		text-decoration: none;

		&:hover,
		&.active {
			cursor: pointer;
			background: rgba(255, 255, 255, 0.05);
			border-color: #999;
		}

		svg {
			width: 22px;
			height: 22px;
		}
	}
`;
