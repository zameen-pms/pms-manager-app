import { StyledMaintenanceLayout } from "./Maintenance.styled";
import { Outlet } from "react-router-dom";

const MaintenanceLayout = () => {
	return (
		<StyledMaintenanceLayout>
			<div className="maintenance-body">
				<Outlet />
			</div>
		</StyledMaintenanceLayout>
	);
};

export default MaintenanceLayout;
