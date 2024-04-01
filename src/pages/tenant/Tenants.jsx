import { useEffect, useState } from "react";
import getUsers from "../../features/api/users/getUsers";
import { useSelector } from "react-redux";
import { getUser } from "../../features/app/authSlice";
import Table from "../../features/ui/table/Table";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../features/ui/pageTitle/PageTitle";

const Tenants = () => {
	const user = useSelector(getUser);
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();

	const getTenants = async () => {
		try {
			const response = await getUsers(user.accessToken, "role=Tenant");
			setUsers(response.data);
		} catch (err) {
			alert("Unable to fetch tenants.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		getTenants();
	}, []);

	const handleRowClick = ({ row }) => navigate(`${row._id}`);

	return (
		<>
			<PageTitle showBack>Tenants</PageTitle>
			<Table
				rows={users}
				columns={[
					{
						field: "firstName",
						headerName: "First Name",
						width: 200,
					},
					{
						field: "lastName",
						headerName: "Last Name",
						width: 200,
					},
					{
						field: "email",
						headerName: "Email",
						width: 200,
					},
					{
						field: "status",
						headerName: "Status",
						width: 200,
					},
					{
						field: "createdAt",
						headerName: "Created At",
						width: 300,
					},
				]}
				tableOptions={{
					onRowClick: handleRowClick,
					getRowId: (row) => row["_id"],
				}}
			/>
		</>
	);
};

export default Tenants;
