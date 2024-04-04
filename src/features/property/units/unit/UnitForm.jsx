import Button from "../../../ui/button/Button";
import Dropdown from "../../../ui/dropdown/Dropdown";
import Input from "../../../ui/input/Input";
import { StyledPropertyForm } from "../../PorpertyForm.styled";

const UnitForm = ({ unit, setUnit, canEdit, handleSave }) => {
	return (
		<StyledPropertyForm onSubmit={handleSave}>
			<div className="grid">
				<Input
					id="details-lease"
					label="Lease"
					value={unit?.lease || ""}
					onChange={(e) =>
						setUnit({ ...unit, lease: e.target.value })
					}
					disabled
				/>
				<Dropdown
					id="details-status"
					label="Availability"
					placeholder="Select Availability"
					disabled={!canEdit}
					required
					options={["Available", "Unavailable", "Occupied"]}
					value={unit?.status || ""}
					setValue={(status) => setUnit({ ...unit, status })}
					onChange={(e) =>
						setUnit({ ...unit, status: e.target.value })
					}
				/>
			</div>
			{canEdit && <Button type="submit">Save</Button>}
		</StyledPropertyForm>
	);
};

export default UnitForm;
