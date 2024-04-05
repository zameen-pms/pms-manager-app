import Button from "../ui/button/Button";
import Dropdown from "../ui/dropdown/Dropdown";
import Input from "../ui/input/Input";
import { StyledPropertyForm } from "./PorpertyForm.styled";

const PropertyForm = ({ property, setProperty, canEdit, handleSave }) => {
	return (
		<StyledPropertyForm onSubmit={handleSave}>
			<div className="grid">
				<Dropdown
					id="property-form-type"
					label="Property Type"
					placeholder="Property Type"
					disabled={!canEdit}
					required
					options={["Single-Family", "Multi-Family"]}
					value={property?.type || ""}
					setValue={(type) => setProperty({ ...property, type })}
					onChange={(e) =>
						setProperty({ ...property, type: e.target.value })
					}
				/>
				<span></span>
				<Input
					id="property-form-street"
					label="Street"
					value={property?.location?.street || ""}
					onChange={(e) =>
						setProperty({
							...property,
							location: {
								...property.location,
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
					value={property?.location?.city || ""}
					onChange={(e) =>
						setProperty({
							...property,
							location: {
								...property.location,
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
					value={property?.location?.state || ""}
					onChange={(e) =>
						setProperty({
							...property,
							location: {
								...property.location,
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
					value={property?.location?.zip || ""}
					onChange={(e) =>
						setProperty({
							...property,
							location: {
								...property.location,
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
	);
};

export default PropertyForm;
