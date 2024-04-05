import { useSelector } from "react-redux";
import { getUser } from "../../features/app/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../features/ui/pageTitle/PageTitle";
import Table from "../../features/ui/table/Table";
import Button from "../../features/ui/button/Button";
import getSingleFamilies from "../../features/api/singleFamilies/getSingleFamilies";

const Properties = () => {
	const user = useSelector(getUser);
	const [properties, setProperties] = useState(null);
	const navigate = useNavigate();

	const formatAddress = (address) => {
		return `${address?.street} ${address?.city}, ${address?.state} ${address?.zip}`;
	};

	const fetchProperties = async () => {
		try {
			const { data } = await getSingleFamilies(user.accessToken);
			const formattedData = data.map((property) => ({
				...property,
				address: formatAddress(property?.address),
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
						field: "address",
						headerName: "Address",
						width: 500,
					},
					{
						field: "availability",
						headerName: "Availability",
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
