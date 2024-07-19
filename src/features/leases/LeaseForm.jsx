import React, { useEffect, useState } from "react";
import Button from "../ui/button/Button";
import getProperties from "../api/properties/getProperties";
import { useSelector } from "react-redux";
import { getUser } from "../app/authSlice";
import Dropdown from "../ui/dropdown/Dropdown";
import { getAddress } from "../utils/getAddress";
import Input from "../ui/input/Input";
import UserSearchDropdown from "../contracts/UserSearchDropdown";
import getUsers from "../api/users/getUsers";
import ContractsTable from "./ContractsTable";
import getContracts from "../api/contracts/getContracts";

const LeaseForm = ({ lease, setLease, canEdit, handleSave }) => {
	const { accessToken } = useSelector(getUser);
	const [properties, setProperties] = useState(null);
	const [selectedProperty, setSelectedProperty] = useState(null);
	const [tenants, setTenants] = useState([]);
	const [tenantSearch, setTenantSearch] = useState("");
	const [contractSearch, setContractSearch] = useState("");
	const [contracts, setContracts] = useState([]);
	const [selectedContract, setSelectedContract] = useState(
		lease?.contract?.title || ""
	);

	const fetchProperties = async () => {
		try {
			const { data } = await getProperties(accessToken);
			setProperties(
				data.map((property) => ({
					id: property._id,
					value: getAddress(property?.address),
				}))
			);
		} catch (err) {
			alert("Unable to fetch properties.");
		}
	};

	const fetchTenants = async () => {
		try {
			const { data } = await getUsers(accessToken, { role: "Tenant" });
			setTenants(data);
		} catch (err) {
			alert("Unable to fetch users.");
		}
	};

	const fetchContracts = async () => {
		try {
			const { data } = await getContracts(accessToken);
			setContracts(data);
		} catch (err) {
			alert("Unable to fetch contracts.");
		}
	};

	useEffect(() => {
		fetchProperties();
		fetchTenants();
		fetchContracts();
	}, []);

	useEffect(() => {
		if (selectedProperty) {
			setLease({ ...lease, property: selectedProperty.id });
		}
	}, [selectedProperty]);

	if (!properties) return <p>Loading properties...</p>;

	return (
		<form onSubmit={handleSave} className="column gap-2">
			<div className="grid">
				<Dropdown
					label="Select Property"
					options={properties}
					value={selectedProperty?.value || ""}
					placeholder="Select Property..."
					onChange={(option) => setSelectedProperty(option)}
					disabled={!canEdit}
					required
				/>
				<Input
					label="Lease Start Date"
					value={lease?.startDate || ""}
					onChange={(e) =>
						setLease({ ...lease, startDate: e.target.value })
					}
					type="date"
					disabled={!canEdit}
					required
				/>
				<Input
					label="Lease End Date"
					value={lease?.endDate || ""}
					onChange={(e) =>
						setLease({ ...lease, endDate: e.target.value })
					}
					type="date"
					disabled={!canEdit}
					required
				/>
				<Input
					label="Rent Amount ($)"
					value={lease?.rent || ""}
					onChange={(e) =>
						setLease({ ...lease, rent: e.target.value })
					}
					type="number"
					disabled={!canEdit}
					required
				/>
				<Input
					label="Rent Due Date (Day of Month)"
					value={lease?.rentDate || ""}
					onChange={(e) =>
						setLease({ ...lease, rentDate: e.target.value })
					}
					type="number"
					disabled={!canEdit}
					required
				/>
				<Dropdown
					label="Lease Status"
					options={[{ value: "Active" }, { value: "Inactive" }]}
					value={lease?.status || ""}
					placeholder="Set Status..."
					onChange={(option) =>
						setLease({ ...lease, status: option.value })
					}
					disabled={!canEdit}
					required
				/>
			</div>
			<div className="grid">
				<div className="column gap-05">
					<Input
						label="Tenants"
						placeholder="Search Tenants"
						value={tenantSearch || ""}
						onChange={(e) => setTenantSearch(e.target.value)}
					/>
					<UserSearchDropdown
						options={tenants}
						onChange={(selected) =>
							setLease({ ...lease, tenants: selected })
						}
						search={tenantSearch}
					/>
				</div>
			</div>
			<div className="column gap-05">
				{selectedContract ? (
					<div className="row align-center justify-sb">
						<h4>Contract: {selectedContract}</h4>
						<Button
							onClick={() => {
								setLease({ ...lease, contract: "" });
								setSelectedContract("");
							}}
						>
							Clear Selection
						</Button>
					</div>
				) : (
					<h4>Select Contract</h4>
				)}
				<Input
					label="Search"
					value={contractSearch}
					placeholder="Search Contracts"
					onChange={(e) => setContractSearch(e.target.value)}
				/>
				<ContractsTable
					search={contractSearch}
					contracts={contracts}
					loading={false}
					onClick={({ id, row }) => {
						setSelectedContract(row.title);
						setLease({ ...lease, contract: id });
					}}
				/>
			</div>
			{canEdit && <Button type="submit">Save</Button>}
		</form>
	);
};

export default LeaseForm;
