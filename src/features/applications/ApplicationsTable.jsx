import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../ui/table/Table";

const columns = [
	{
		field: "user",
		headerName: "User",
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

	const getFullName = (user) => {
		if (!user?.firstName && !user?.lastName) return "";

		let name = "";

		if (user?.firstName) name += user.firstName;
		if (user?.lastName) name += ` ${user.lastName}`;

		return name;
	};

	useEffect(() => {
		setData(
			applications.map((app) => ({
				...app,
				id: app._id,
				user: getFullName(app.user),
				property: app.property?.address?.street || "N/A",
				createdAt: app.createdAt.split("T")[0],
			}))
		);
	}, []);

	const handleRowClick = ({ id }) => {
		navigate(`/applications/${id}`);
	};

	if (loading) return <p>Loading...</p>;

	return <Table rows={data} columns={columns} onClick={handleRowClick} />;
};

export default ApplicationsTable;
