import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import { StyledPropertyForm } from "./PorpertyForm.styled";

const PropertyForm = ({ property, setProperty, canEdit, handleSave }) => {
	return (
		<>
			<StyledPropertyForm onSubmit={handleSave}>
				<div className="grid">
					<Input
						id="property-form-street"
						label="Street"
						value={property?.address?.street || ""}
						onChange={(e) =>
							setProperty({
								...property,
								address: {
									...property.address,
									street: e.target.value,
								},
							})
						}
						disabled={!canEdit}
						required
					/>
					<Input
						id="property-form-city"
						label="City"
						value={property?.address?.city || ""}
						onChange={(e) =>
							setProperty({
								...property,
								address: {
									...property.address,
									city: e.target.value,
								},
							})
						}
						disabled={!canEdit}
						required
					/>
					<Input
						id="property-form-state"
						label="State"
						value={property?.address?.state || ""}
						onChange={(e) =>
							setProperty({
								...property,
								address: {
									...property.address,
									state: e.target.value,
								},
							})
						}
						disabled={!canEdit}
						required
					/>
					<Input
						id="property-form-zip"
						label="Zipcode"
						value={property?.address?.zip || ""}
						onChange={(e) =>
							setProperty({
								...property,
								address: {
									...property.address,
									zip: e.target.value,
								},
							})
						}
						disabled={!canEdit}
						required
					/>
				</div>
				{canEdit && <Button type="submit">Save</Button>}
			</StyledPropertyForm>
		</>
	);
};

export default PropertyForm;
