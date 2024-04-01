import Button from "../ui/button/Button";
import Dropdown from "../ui/dropdown/Dropdown";
import Input from "../ui/input/Input";
import { StyledTenantForm } from "./TenantForm.styled";

const TenantForm = ({ tenant, setTenant, canEdit, handleSave }) => {
	return (
		<>
			<StyledTenantForm onSubmit={handleSave}>
				<div className="grid">
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
					<Dropdown
						id="tenant-status"
						label="Status"
						placeholder="Tenant Status"
						disabled={!canEdit}
						options={["Active", "Disabled"]}
						value={tenant?.status || ""}
						setValue={(status) => setTenant({ ...tenant, status })}
						onChange={(e) =>
							setTenant({ ...tenant, status: e.target.value })
						}
					/>
				</div>
				<Button type="submit">Save Tenant</Button>
			</StyledTenantForm>
		</>
	);
};

export default TenantForm;
