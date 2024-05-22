import { useEffect, useState } from "react";
import getProperties from "../../features/api/properties/getProperties";
import { useSelector } from "react-redux";
import { getUser } from "../../features/app/authSlice";
import Dropdown from "../../features/ui/dropdown/Dropdown";
import getWorkOrders from "../../features/api/workOrders/getWorkOrders";
import Tab from "../../features/ui/tab/Tab";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import Button from "../../features/ui/button/Button";

const columns = [
	{
		field: "address",
		headerName: "Property",
		width: 200,
	},
	{
		field: "createdAt",
		headerName: "Created At",
		width: 150,
	},
	{
		field: "title",
		headerName: "Title",
		width: 200,
	},
	{
		field: "description",
		headerName: "Description",
		width: 250,
	},
	{
		field: "status",
		headerName: "Status",
		width: 150,
	},
];

const WorkOrders = () => {
	const user = useSelector(getUser);
	const navigate = useNavigate();
	const [tab, setTab] = useState("All");
	const [properties, setProperties] = useState([]);
	const [selectedProperty, setSelectedProperty] = useState({ value: "All" });
	const [workOrders, setWorkOrders] = useState([]);

	useEffect(() => {
		const fetchProperties = async () => {
			try {
				const { data } = await getProperties(user.accessToken);
				setProperties(
					data.map((property) => ({
						id: property._id,
						value: property?.address?.street,
					}))
				);
			} catch (err) {
				console.log(err);
				alert("Unable to fetch properties.");
			}
		};

		fetchProperties();
	}, []);

	useEffect(() => {
		const fetchWorkOrders = async () => {
			try {
				const params = {};
				if (tab !== "All") params.status = tab;
				if (selectedProperty?.id) params.property = selectedProperty.id;
				const response = await getWorkOrders(user.accessToken, params);
				setWorkOrders(
					response.data.map((workOrder, index) => ({
						...workOrder,
						id: workOrder?._id || index,
						address: workOrder?.property?.address?.street,
						createdAt: workOrder?.createdAt?.split("T")[0],
					}))
				);
			} catch (err) {
				console.log(err);
				alert("Unable to fetch work orders.");
			}
		};

		fetchWorkOrders();
	}, [tab, selectedProperty]);

	return (
		<section className="column gap-1">
			<div className="column">
				<div className="row gap-1 align-end">
					<Dropdown
						label="Properties"
						placeholder="Select Property..."
						options={[{ value: "All" }, ...properties]}
						value={selectedProperty?.value}
						onChange={(option) => {
							setSelectedProperty(option);
						}}
					/>
					<Button onClick={() => navigate("add")}>
						Add Work Order
					</Button>
				</div>
				<Tab
					options={[
						"All",
						"Pending",
						"In-Progress",
						"Completed",
						"Cancelled",
					]}
					tab={tab}
					setTab={setTab}
				/>
			</div>
			<DataGrid
				rows={workOrders}
				columns={columns}
				initialState={{
					pagination: { paginationModel: { pageSize: 10 } },
				}}
				pageSizeOptions={[5, 10, 25, 50]}
				onRowClick={({ id }) => navigate(`/maintenance/${id}`)}
				slotProps={{
					row: {
						className: "data-grid-row",
					},
				}}
			/>
		</section>
	);
};

export default WorkOrders;
