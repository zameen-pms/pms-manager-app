import { useState } from "react";
import Button from "../../features/ui/button/Button";
import Dropdown from "../../features/ui/dropdown/Dropdown";
import Input from "../../features/ui/input/Input";
import { StyledAddWorkOrder } from "./Maintenance.styled";
import createWorkOrder from "../../features/api/workOrders/createWorkOrder";
import { useSelector } from "react-redux";
import { getUser } from "../../features/app/authSlice";

const AddWorkOrderModal = (props) => {
	const user = useSelector(getUser);
	const [workOrder, setWorkOrder] = useState({
		property: "",
		title: "",
		description: "",
	});

	const handleSubmit = async (e) => {
		try {
			e?.preventDefault();

			if (!workOrder.property || workOrder.property == null) {
				alert("Please select a property.");
			}

			const body = { ...workOrder, property: workOrder.property.id };
			await createWorkOrder(user.accessToken, body);

			alert("Work order has been added.");
			props.setShowModal(false);
		} catch (err) {
			console.log(err);
			alert("Unable to add work order.");
		}
	};

	return (
		<StyledAddWorkOrder onSubmit={handleSubmit}>
			<Dropdown
				label="Properties"
				options={props.properties}
				value={workOrder?.property?.value || ""}
				onChange={(option) => {
					setWorkOrder({ ...workOrder, property: option });
				}}
				required
			/>
			<Input
				label="Title"
				placeholder="Title"
				required
				onChange={(e) =>
					setWorkOrder({ ...workOrder, title: e.target.value })
				}
			/>
			<Input
				label="Description"
				placeholder="Description"
				required
				onChange={(e) =>
					setWorkOrder({ ...workOrder, description: e.target.value })
				}
			/>
			<Button type="submit">Add Work Order</Button>
		</StyledAddWorkOrder>
	);
};

export default AddWorkOrderModal;
