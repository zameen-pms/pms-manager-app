import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setContent } from "../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import Button from "../../features/ui/button/Button";
import { getUser } from "../../features/app/authSlice";
import getWorkOrders from "../../features/api/workOrders/getWorkOrders";
import Tab from "../../features/ui/tab/Tab";
import WorkOrdersTable from "../../features/workOrders/WorkOrdersTable";
import Dropdown from "../../features/ui/dropdown/Dropdown";
import getProperties from "../../features/api/properties/getProperties";

const WorkOrders = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { accessToken } = useSelector(getUser);
	const [status, setStatus] = useState("All");
	const [workOrders, setWorkOrders] = useState([]);
	const [properties, setProperties] = useState([]);
	const [selectedProperty, setSelectedProperty] = useState({
		id: "All",
		value: "All",
	});
	const [loading, setLoading] = useState(false);

	const fetchProperties = async () => {
		try {
			setLoading(true);
			const { data } = await getProperties(accessToken);
			setProperties([
				{
					id: "All",
					value: "All",
				},
				...data.map((property) => ({
					id: property._id,
					value: property.address.street,
				})),
			]);
		} catch (err) {
			alert("Unable to fetch properties.");
			console.log(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProperties();
	}, []);

	const fetchWorkOrders = async () => {
		try {
			setLoading(true);
			const params = {};
			if (status !== "All") {
				params.status = status;
			}
			if (selectedProperty.value !== "All") {
				params.property = selectedProperty.id;
			}
			const { data } = await getWorkOrders(accessToken, params);
			setWorkOrders(data);
		} catch (err) {
			alert("Unable to fetch maintenance requests.");
			console.log(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchWorkOrders();
	}, [status, selectedProperty]);

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row justify-sb align-center">
					<div className="row align-center gap-05">
						<MdArrowBack
							className="back-arrow"
							onClick={() => navigate(-1)}
						/>
						<h3>Maintenance Requests</h3>
					</div>
					<Button onClick={() => navigate("add")}>
						Add Maintenance Request
					</Button>
				</div>
			)
		);
	});

	return (
		<>
			{properties && (
				<Dropdown
					label="Filter By Property"
					options={properties}
					value={selectedProperty.value}
					onChange={(option) => setSelectedProperty(option)}
				/>
			)}
			<Tab
				options={[
					"All",
					"Created",
					"In-Progress",
					"Cancelled",
					"Completed",
				]}
				tab={status}
				setTab={setStatus}
			/>
			<WorkOrdersTable loading={loading} workOrders={workOrders} />
		</>
	);
};

export default WorkOrders;
