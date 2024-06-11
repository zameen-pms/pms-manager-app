import { useEffect, useState } from "react";
import Table from "../ui/table/Table";
import { useNavigate } from "react-router-dom";

const columns = [
	{
		field: "role",
		headerName: "Role",
		width: 150,
	},
	{
		field: "firstName",
		headerName: "First Name",
		width: 150,
	},
	{
		field: "lastName",
		headerName: "Last Name",
		width: 150,
	},
	{
		field: "email",
		headerName: "Email",
		width: 250,
	},
	{
		field: "status",
		headerName: "Status",
		width: 150,
	},
	{
		field: "createdAt",
		headerName: "Created At",
		width: 150,
	},
];

const UsersTable = ({ loading, users }) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		setData(
			users.map((user) => ({
				...user,
				id: user._id,
				createdAt: user.createdAt.split("T")[0],
			}))
		);
	}, [users]);

	const handleRowClick = (params) => {
		const { id } = params;
		navigate(`/users/${id}`);
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

export default UsersTable;
