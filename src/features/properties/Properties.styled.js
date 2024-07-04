import styled from "styled-components";

export const StyledProperties = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 2rem;
	padding-bottom: 3rem;
`;

export const StyledPropertyCard = styled.div`
	background: white;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	cursor: pointer;
	transition: all 0.25s ease-in-out;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px;
	}

	.card-header {
		width: 100%;
		height: 250px;
		position: relative;
		overflow: hidden;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			position: absolute;
			top: 0;
			left: 0;
		}

		.property-availability {
			position: absolute;
			top: 1rem;
			right: 1rem;
			font-size: 12px;
			text-transform: uppercase;
			font-weight: 600;
			letter-spacing: 0.1px;
			color: white;
			background: ${(props) =>
				props.$availableColor ? props.$availableColor : "#2f3542"};
			padding: 2px 4px;
			border-radius: 4px;
		}
	}

	.card-body {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		h4 {
			font-weight: 500;
			font-size: 20px;
		}

		.property-row {
			display: flex;
			align-items: center;
			justify-content: space-between;

			p {
				font-size: 14px;
				font-weight: 300;
			}
		}
	}
`;

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
