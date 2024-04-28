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
