import styled from "styled-components";

export const StyledLayout = styled.main`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
`;

export const StyledBody = styled.section`
	flex: 1;
	height: 100%;
	overflow-y: scroll;
`;

export const StyledOutlet = styled.section`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
