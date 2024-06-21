import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import { StyledPropertyForm } from "./PorpertyForm.styled";

const PropertyForm = ({ property, setProperty, canEdit, handleSave }) => {
	return (
		<>
			<StyledPropertyForm onSubmit={handleSave}>
				<div className="column gap-05">
					<h4>Address</h4>
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
				</div>
				<div className="column gap-05">
					<h4>General Information</h4>
					<div className="grid">
						<Input
							label="Number of Beds"
							value={property?.general?.beds || ""}
							onChange={(e) =>
								setProperty({
									...property,
									general: {
										...property.general,
										beds: e.target.value,
									},
								})
							}
							type="number"
							disabled={!canEdit}
							required
						/>
						<Input
							label="Number of Baths"
							value={property?.general?.baths || ""}
							onChange={(e) =>
								setProperty({
									...property,
									general: {
										...property.general,
										baths: e.target.value,
									},
								})
							}
							type="number"
							disabled={!canEdit}
							required
						/>
						<Input
							label="Property Size (sqft)"
							value={property?.general?.sqft || ""}
							onChange={(e) =>
								setProperty({
									...property,
									general: {
										...property.general,
										sqft: e.target.value,
									},
								})
							}
							type="number"
							disabled={!canEdit}
							required
						/>
						<Input
							label="Rent Amount ($)"
							value={property?.general?.rent || ""}
							onChange={(e) =>
								setProperty({
									...property,
									general: {
										...property.general,
										rent: e.target.value,
									},
								})
							}
							type="number"
							disabled={!canEdit}
							required
						/>
					</div>
				</div>
				{canEdit && <Button type="submit">Save</Button>}
			</StyledPropertyForm>
		</>
	);
};

export default PropertyForm;
