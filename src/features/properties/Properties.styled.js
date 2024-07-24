import styled from "styled-components";

export const StyledPropertyImages = styled.div`
	width: 100%;
	background: whitesmoke;
	overflow-x: scroll;
	display: flex;
	flex-direction: row;
	gap: 1rem;
`;

export const StyledPropertyImage = styled.div`
	img {
		height: 400px;
		width: auto;
		border-radius: 5px;
	}

	p {
		position: absolute;
		bottom: 0.25rem;
		left: 0.25rem;
		padding: 0.25rem 1rem;
		background: var(--dark-gray);
		border-radius: 4px;
		color: white;
	}

	.overlay {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: none;
		backdrop-filter: none;
		transition: all 0.25s ease-in-out;

		svg {
			display: none;
			cursor: pointer;
			width: 40px;
			height: 40px;
			position: absolute;
			transition: all 0.25s ease-in-out;
		}

		.delete {
			top: 0.5rem;
			left: 0.5rem;

			&:hover {
				color: #e74c3c;
			}
		}

		.edit {
			top: 0.5rem;
			right: 0.5rem;

			&:hover {
				color: var(--primary-blue);
			}
		}

		.left {
			bottom: 0.5rem;
			left: 0.5rem;

			&:hover {
				color: var(--primary-blue);
			}
		}

		.right {
			bottom: 0.5rem;
			right: 0.5rem;

			&:hover {
				color: var(--primary-blue);
			}
		}

		&:hover {
			background-color: rgba(0, 0, 0, 0.75);
			backdrop-filter: blur(4px);

			svg {
				display: block;
				color: white;
			}
		}
	}
`;
