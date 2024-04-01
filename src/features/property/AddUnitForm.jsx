import Input from "../ui/input/Input";
import { StyledPropertyForm } from "./PorpertyForm.styled";
import Dropdown from "../ui/dropdown/Dropdown";
import Button from "../ui/button/Button";

const AddUnitForm = ({ property, handleSave, unit, setUnit }) => {
	return (
		<StyledPropertyForm onSubmit={handleSave}>
			<div className="grid">
				<Input
					id="add-unit-number"
					label="Unit Number"
					required
					value={unit?.number || ""}
					onChange={(e) =>
						setUnit({ ...property, name: e.target.value })
					}
					disabled={property?.type === "Single-Family"}
				/>
				<Input
					id="add-unit-property"
					label="Property"
					disabled
					value={property?.name || ""}
					readOnly
				/>
				<Dropdown
					id="add-unit-availablility"
					label="Availability"
					placeholder="Select Availability"
					options={["Available", "Unavailable", "Occupied"]}
					value={unit?.status || ""}
					setValue={(status) => setUnit({ ...unit, status })}
					onChange={(e) =>
						setUnit({ ...unit, status: e.target.value })
					}
				/>
			</div>
			<Button type="submit">Add Unit</Button>
		</StyledPropertyForm>
	);
};

export default AddUnitForm;
