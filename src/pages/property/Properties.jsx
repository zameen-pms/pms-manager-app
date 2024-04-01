import { useSelector } from "react-redux";
import { getUser } from "../../features/app/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getProperties from "../../features/api/properties/getProperties";
import PageTitle from "../../features/ui/pageTitle/PageTitle";
import Table from "../../features/ui/table/Table";
import Button from "../../features/ui/button/Button";

const Properties = () => {
	const user = useSelector(getUser);
	const [properties, setProperties] = useState([]);
	const navigate = useNavigate();

	const formatLocation = (location) => {
		return `${location?.street} ${location?.city}, ${location?.state} ${location?.zip}`;
	};

	const fetchProperties = async () => {
		try {
			const query =
				user.role === "owner" || user.role === "manager"
					? `${user.role}=${user._id}`
					: "";
			const { data } = await getProperties(user.accessToken, query);
			const formattedData = data.map((property) => ({
				...property,
				location: formatLocation(property?.location),
			}));
			setProperties(formattedData);
		} catch (err) {
			alert("Unable to fetch properties.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchProperties();
	}, []);

	const handleRowClick = ({ row }) => navigate(`${row._id}`);

	return (
		<section className="column gap-3">
			<div className="row justify-sb align-center">
				<PageTitle showBack>Properties</PageTitle>
				<Button onClick={() => navigate("add")}>Add Property</Button>
			</div>
			<Table
				rows={properties}
				columns={[
					{
						field: "name",
						headerName: "Name",
						width: 200,
					},
					{
						field: "location",
						headerName: "Street",
						width: 400,
					},
					{
						field: "type",
						headerName: "Property Type",
						width: 200,
					},
				]}
				tableOptions={{
					onRowClick: handleRowClick,
					getRowId: (row) => row["_id"],
				}}
			/>
		</section>
	);
};

export default Properties;
