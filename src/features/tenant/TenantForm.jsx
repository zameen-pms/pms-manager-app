import Input from "../ui/input/Input";
import { StyledTenantForm } from "./TenantForm.styled";

const TenantForm = ({ tenant }) => {
	return (
		<>
			<StyledTenantForm>
				<Input
					id="tenant-first-name"
					label="First Name"
					value={tenant?.firstName || ""}
					disabled
				/>
				<Input
					id="tenant-last-name"
					label="Last Name"
					value={tenant?.lastName || ""}
					disabled
				/>
				<Input
					id="tenant-email"
					label="Email"
					value={tenant?.email || ""}
					disabled
				/>
				<Input
					id="tenant-status"
					label="Status"
					value={tenant?.status || ""}
					disabled
				/>
			</StyledTenantForm>
		</>
	);
};

export default TenantForm;
