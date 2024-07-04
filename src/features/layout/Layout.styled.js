import styled from "styled-components";

export const StyledLayout = styled.main`
	height: 100%;
	display: flex;
	padding-left: 300px;
`;

export const StyledBody = styled.section`
	flex: 1;
	width: 100%;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const StyledContent = styled.section`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;
