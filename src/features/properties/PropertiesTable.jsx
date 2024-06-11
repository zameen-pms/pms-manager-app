import { useEffect, useState } from "react";
import Table from "../ui/table/Table";
import { useNavigate } from "react-router-dom";

const columns = [
	{
		field: "address",
		headerName: "Address",
		width: 300,
	},
	{
		field: "type",
		headerName: "Type",
		width: 150,
	},
	{
		field: "availability",
		headerName: "Availability",
		width: 150,
	},
];

const PropertiesTable = ({ loading, properties }) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	const getAddress = (address) => {
		return `${address.street} ${address.city}, ${address.state} ${address.zip}`;
	};

	useEffect(() => {
		setData(
			properties.map((property) => ({
				...property,
				id: property._id,
				address: getAddress(property.address),
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
