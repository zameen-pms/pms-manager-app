import styled from "styled-components";

export const StyledTab = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 1rem;
	border-bottom: 0.5px solid lightgray;
`;

export const TabOption = styled.p`
	cursor: pointer;
	padding: 0.75rem;
	font-size: 14px;
	color: ${(props) => (props?.$selected ? "var(--primary-blue)" : "gray")};
	border-bottom: ${(props) =>
		props?.$selected ? "2px solid var(--primary-blue)" : "none"};
	font-weight: 600;
	letter-spacing: -0.1px;
`;
