import Dropdown from "../ui/dropdown/Dropdown";
import Input from "../ui/input/Input";
import WorkOrderComments from "./WorkOrderComments";

const WorkOrderForm = ({ workOrder, setWorkOrder, canEdit }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	if (!workOrder?._id) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="column gap-1">
				<div className="container">
					<Input
						label="Property"
						value={workOrder?.property?.address?.street}
						readOnly
						disabled
					/>
				</div>
				<div className="container">
					<Input
						label="Title"
						value={workOrder?.title}
						onChange={(e) =>
							setWorkOrder({
								...workOrder,
								title: e.target.value,
							})
						}
						required
						disabled={!canEdit}
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
						disabled={!canEdit}
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
						disabled={!canEdit}
					/>
				</div>
			</form>
			<WorkOrderComments />
		</>
	);
};

export default WorkOrderForm;
