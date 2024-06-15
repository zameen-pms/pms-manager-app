import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../ui/table/Table";

const columns = [
	{
		field: "status",
		headerName: "Status",
		width: 100,
	},
	{
		field: "property",
		headerName: "Property",
		width: 250,
	},
	{
		field: "title",
		headerName: "Title",
		width: 200,
	},
	{
		field: "description",
		headerName: "Description",
		width: 400,
	},
	{
		field: "createdAt",
		headerName: "Created At",
		width: 150,
	},
	{
		field: "updatedAt",
		headerName: "Updated At",
		width: 150,
	},
];

const WorkOrdersTable = ({ loading, workOrders }) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		setData(
			workOrders.map((order) => ({
				...order,
				id: order._id,
				property: order.property?.address?.street || "N/A",
				createdAt: order.createdAt.split("T")[0],
				updatedAt: order.updatedAt.split("T")[0],
			}))
		);
	}, [workOrders]);

	const handleRowClick = (params) => {
		const { id } = params;
		navigate(`/maintenance/${id}`);
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

export default WorkOrdersTable;
