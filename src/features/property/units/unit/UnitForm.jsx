import { useNavigate } from "react-router-dom";
import Button from "../../../ui/button/Button";
import Dropdown from "../../../ui/dropdown/Dropdown";
import { StyledPropertyForm } from "../../PorpertyForm.styled";

const UnitForm = ({ unit, setUnit, canEdit, handleSave }) => {
	const navigate = useNavigate();

	return (
		<StyledPropertyForm onSubmit={handleSave}>
			<div className="grid">
				<Button
					onClick={() => navigate(`/leases/${unit?.lease || ""}`)}
				>
					View Lease Details
				</Button>
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
