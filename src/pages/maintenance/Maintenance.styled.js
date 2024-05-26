import styled from "styled-components";

export const StyledMaintenanceLayout = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background: #f8f8f8;

	.maintenance-body {
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		padding: 1rem;
	}
`;

export const StyledAddWorkOrder = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
