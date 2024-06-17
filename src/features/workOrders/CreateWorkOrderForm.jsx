import { useEffect, useState } from "react";
import Input from "../ui/input/Input";
import Dropdown from "../ui/dropdown/Dropdown";
import Button from "../ui/button/Button";
import { useSelector } from "react-redux";
import { getUser } from "../app/authSlice";
import getProperties from "../api/properties/getProperties";
import createWorkOrder from "../api/workOrders/createWorkOrder";
import { useNavigate } from "react-router-dom";

const CreateWorkOrderForm = () => {
	const user = useSelector(getUser);
	const [workOrder, setWorkOrder] = useState({
		status: "Created",
		createdBy: "",
		title: "",
		description: "",
	});
	const [properties, setProperties] = useState([]);
	const [selectedProperty, setSelectedProperty] = useState(null);
	const navigate = useNavigate();

	const fetchProperties = async () => {
		try {
			const { data } = await getProperties(user.accessToken);
			setProperties(
				data.map((property) => {
					const { address } = property;
					const formattedAddress = `${address.street} ${address.city}, ${address.state} ${address.zip}`;
					return { id: property._id, value: formattedAddress };
				})
			);
		} catch (err) {
			alert("Unable to fetch properties.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchProperties();
	}, []);

	useEffect(() => {
		if (user?._id) {
			setWorkOrder({ ...workOrder, createdBy: user._id });
		}
	}, [user]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const body = { ...workOrder, property: selectedProperty.id };
			await createWorkOrder(user.accessToken, body);
			alert("Work order created.");
			navigate("/maintenance");
		} catch (err) {
			alert("Unable to create work order.");
			console.log(err.message);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="column gap-1">
			<div className="container">
				<Dropdown
					label="Property"
					options={properties}
					value={selectedProperty?.value || ""}
					onChange={(option) => setSelectedProperty(option)}
				/>
			</div>
			<div className="container">
				<Input
					label="Title"
					value={workOrder?.title}
					onChange={(e) =>
						setWorkOrder({ ...workOrder, title: e.target.value })
					}
					required
				/>
				<Dropdown
					label="Status"
					options={[
						{ value: "Created" },
						{ value: "In-Progress" },
						{ value: "Cancelled" },
						{ value: "Completed" },
					]}
					value={workOrder?.status}
					onChange={(option) =>
						setWorkOrder({ ...workOrder, status: option.value })
					}
				/>
			</div>
			<div className="container">
				<Input
					label="Description"
					value={workOrder?.description}
					onChange={(e) =>
						setWorkOrder({
							...workOrder,
							description: e.target.value,
						})
					}
					required
				/>
			</div>
			<Button type="submit">Create Maintenance Request</Button>
		</form>
	);
};

export default CreateWorkOrderForm;
