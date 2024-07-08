import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../ui/table/Table";

const columns = [
	{
		field: "applicant",
		headerName: "Applicant",
		width: 250,
	},
	{
		field: "property",
		headerName: "Property",
		width: 250,
	},
	{
		field: "hasPaid",
		headerName: "Has Paid",
		width: 100,
	},
	{
		field: "status",
		headerName: "Status",
		width: 100,
	},
	{
		field: "createdAt",
		headerName: "Created At",
		width: 150,
	},
];

const ApplicationsTable = ({ loading, applications }) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		setData(
			applications.map((app) => ({
				...app,
				id: app._id,
				applicant: app?.signature?.name || "N/A",
				property: app.property?.address?.street || "N/A",
				createdAt: app.createdAt.split("T")[0],
			}))
		);
	}, [applications]);

	const handleRowClick = ({ id }) => {
		navigate(`/applications/${id}`);
	};

	if (loading) return <p>Loading...</p>;

	return <Table rows={data} columns={columns} onClick={handleRowClick} />;
};

export default ApplicationsTable;
