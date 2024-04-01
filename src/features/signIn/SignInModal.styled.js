import styled from "styled-components";

export const StyledSignInModal = styled.section`
	width: 500px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	h3 {
		color: var(--primary-blue);
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
`;
