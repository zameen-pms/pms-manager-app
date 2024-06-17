import styled from "styled-components";

export const StyledWorkOrderComments = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 2rem;

	.comments-body {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.comments-input {
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: flex-end;
	}
`;

export const StyledWorkComment = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	align-items: flex-start;

	.comment-profile {
		width: 40px;
		height: 40px;
		background-color: ${(props) =>
			props?.$color ? props?.$color : "var(--primary-blue)"};
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 16px;
	}

	.comment-body {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.comment-header {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: flex-end;

		h5,
		p {
			color: gray;
			font-size: 14px;
		}

		svg {
			width: 20px;
			height: 20px;
			cursor: pointer;
			transition: all 0.25s ease-in-out;

			&:hover {
				color: #e74c3c;
			}
		}
	}

	.comment-content {
		font-size: 1rem;
	}
`;
