import { useEffect, useState } from "react";
import UserSearchDropdown from "../contracts/UserSearchDropdown";
import Button from "../ui/button/Button";
import Dropdown from "../ui/dropdown/Dropdown";
import Input from "../ui/input/Input";
import { StyledPropertyForm } from "./PorpertyForm.styled";
import getUsers from "../api/users/getUsers";
import { useSelector } from "react-redux";
import { getUser } from "../app/authSlice";

const PropertyForm = ({ property, setProperty, canEdit, handleSave }) => {
	const { accessToken } = useSelector(getUser);
	const [owners, setOwners] = useState([]);
	const [search, setSearch] = useState("");

	const fetchOwners = async () => {
		try {
			const { data } = await getUsers(accessToken, { role: "Owner" });
			setOwners(data);
		} catch (err) {
			alert("Unable to fetch owners.");
		}
	};

	useEffect(() => {
		fetchOwners();
	}, []);

	const handleDropdown = (selected) => {
		setProperty({ ...property, owners: selected });
	};

	return (
		<>
			<StyledPropertyForm onSubmit={handleSave}>
				{property?._id ? (
					<div className="column gap-05">
						<h4>Owner(s)</h4>
						<Input
							label="Owner(s): "
							value={property?.owners
								?.map(
									(owner) =>
										`${owner.firstName} ${owner.lastName}`
								)
								.join(", ")}
							disabled
						/>
					</div>
				) : (
					<div className="column gap-05">
						<h4>Owner(s)</h4>
						<Input
							label="Owners"
							placeholder="Search Owners..."
							value={search || ""}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<UserSearchDropdown
							options={owners}
							onChange={handleDropdown}
							search={search}
						/>
					</div>
				)}
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
						<Input
							label="Description"
							value={property?.general?.description || ""}
							onChange={(e) =>
								setProperty({
									...property,
									general: {
										...property.general,
										description: e.target.value,
									},
								})
							}
							disabled={!canEdit}
						/>
						<Dropdown
							label="Availability"
							options={[
								{ value: "Available" },
								{ value: "Unavailable" },
								{ value: "Occupied" },
							]}
							value={property?.availability || ""}
							onChange={(e) =>
								setProperty({
									...property,
									availability: e.value,
								})
							}
							required
							disabled={!canEdit}
						/>
					</div>
				</div>
				{canEdit && <Button type="submit">Save</Button>}
			</StyledPropertyForm>
		</>
	);
};

export default PropertyForm;
