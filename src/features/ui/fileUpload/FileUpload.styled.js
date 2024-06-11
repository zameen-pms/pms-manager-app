import styled from "styled-components";

export const StyledFileUpload = styled.div``;

export const StyledUploadedFile = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;

	.deleting-text {
		color: #e74c3c;
	}

	svg {
		width: 25px;
		height: 25px;
		cursor: pointer;
		transition: all 0.25s ease-in-out;

		&:hover {
			color: #e74c3c;
		}
	}
`;
