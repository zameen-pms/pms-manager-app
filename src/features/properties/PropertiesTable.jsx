import { useEffect, useState } from "react";
import Table from "../ui/table/Table";
import { useNavigate } from "react-router-dom";
import { getDollarAmount } from "../utils/getDollarAmount";

const columns = [
	{
		field: "street",
		headerName: "Street",
		width: 250,
	},
	{
		field: "city",
		headerName: "City",
		width: 100,
	},
	{
		field: "state",
		headerName: "State",
		width: 75,
	},
	{
		field: "owners",
		headerName: "Owners",
		width: 250,
	},
	{
		field: "leaseStatus",
		headerName: "LeaseStatus",
		width: 150,
	},
	{
		field: "rent",
		headerName: "Rent",
		width: 100,
	},
	{
		field: "type",
		headerName: "Property Type",
		width: 200,
	},
];

const PropertiesTable = ({ loading, properties }) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		setData(
			properties.map((property) => ({
				...property,
				id: property._id,
				street: property.address.street,
				city: property.address.city,
				state: property.address.state,
				leaseStatus: property?.currentLease?._id
					? "Leased"
					: "Not Leased",
				owners:
					property.owners
						.map(
							(owner) => `${owner?.firstName} ${owner?.lastName}`
						)
						.join(", ") || "Unassigned",
				rent: getDollarAmount(property?.general?.rent || 0),
			}))
		);
	}, [properties]);

	const handleRowClick = (row) => {
		const { id } = row;
		navigate(`/properties/${id}`);
	};

	return (
		<>
			{loading ? (
				<p>Loading...</p>
			) : (
				<Table rows={data} columns={columns} onClick={handleRowClick} />
			)}
		</>
	);
};

export default PropertiesTable;
