import Button from "../ui/button/Button";
import Dropdown from "../ui/dropdown/Dropdown";
import Input from "../ui/input/Input";
import { StyledTenantForm } from "./TenantForm.styled";

const AddTenantForm = ({ tenant, setTenant, handleSave }) => {
	return (
		<>
			<StyledTenantForm onSubmit={handleSave}>
				<div className="grid">
					<Input
						id="tenant-first-name"
						label="First Name"
						value={tenant?.firstName || ""}
						onChange={(e) =>
							setTenant({ ...tenant, firstName: e.target.value })
						}
						required
					/>
					<Input
						id="tenant-last-name"
						label="Last Name"
						value={tenant?.lastName || ""}
						onChange={(e) =>
							setTenant({ ...tenant, lastName: e.target.value })
						}
						required
					/>
					<Input
						id="tenant-email"
						label="Email"
						value={tenant?.email || ""}
						onChange={(e) =>
							setTenant({ ...tenant, email: e.target.value })
						}
						required
					/>
					<Dropdown
						id="tenant-status"
						label="Status"
						placeholder="Tenant Status"
						options={["Active", "Disabled"]}
						value={tenant?.status || ""}
						setValue={(status) => setTenant({ ...tenant, status })}
						onChange={(e) =>
							setTenant({ ...tenant, status: e.target.value })
						}
						required
					/>
				</div>
				<Button type="submit">Add Tenant</Button>
			</StyledTenantForm>
		</>
	);
};

export default AddTenantForm;
