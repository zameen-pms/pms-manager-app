import { useState } from "react";
import Input from "../ui/input/Input";
import Dropdown from "../ui/dropdown/Dropdown";
import Button from "../ui/button/Button";

const CreateWorkOrderForm = () => {
	const [workOrder, setWorkOrder] = useState({
		property: "",
		title: "",
		description: "",
		status: "Created",
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit} className="column gap-1">
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
