import { useState } from "react";
import Button from "../ui/button/Button";
import Dropdown from "../ui/dropdown/Dropdown";
import Input from "../ui/input/Input";
import { StyledPropertyForm } from "./PorpertyForm.styled";
import MetaDataPopup from "./MetaDataPopup";
import { MdDelete } from "react-icons/md";

const PropertyForm = ({ property, setProperty, canEdit, handleSave }) => {
	const [showPopup, setShowPopup] = useState(false);

	return (
		<>
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
				<div className="row align-center justify-sb">
					<h3>Meta Data</h3>
					<Button type="button" onClick={() => setShowPopup(true)}>
						Add Meta Data
					</Button>
				</div>
				<div className="column gap-1">
					{Object.keys(property?.metaData).map((key, index) => (
						<div
							key={index}
							className="row align-end justify-sb gap-1"
						>
							<Input
								id={`property-form-${key}`}
								label={property.metaData[key]?.label || ""}
								value={property.metaData[key]?.value || ""}
								disabled={!canEdit}
								onChange={(e) =>
									setProperty({
										...property,
										metaData: {
											...property.metaData,
											[key]: {
												...property.metaData[key],
												value: e.target.value,
											},
										},
									})
								}
							/>
							<div
								className="delete-icon"
								onClick={() =>
									setProperty({
										...property,
										metaData: Object.fromEntries(
											Object.entries(
												property.metaData
											).filter(([k]) => k !== key)
										),
									})
								}
							>
								<MdDelete />
							</div>
						</div>
					))}
				</div>
				{canEdit && <Button type="submit">Save</Button>}
			</StyledPropertyForm>
			{showPopup && (
				<MetaDataPopup
					property={property}
					setProperty={setProperty}
					showPopup={showPopup}
					setShowPopup={setShowPopup}
				/>
			)}
		</>
	);
};

export default PropertyForm;
