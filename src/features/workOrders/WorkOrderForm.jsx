import { useSelector } from "react-redux";
import addCommentById from "../api/workOrders/addCommentById";
import Dropdown from "../ui/dropdown/Dropdown";
import Input from "../ui/input/Input";
import WorkOrderComments from "./WorkOrderComments";
import { getUser } from "../app/authSlice";
import removeCommentById from "../api/workOrders/removeCommentById";

const WorkOrderForm = ({
	workOrder,
	setWorkOrder,
	canEdit,
	fetchWorkOrder,
}) => {
	const { accessToken } = useSelector(getUser);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const addComment = async (comment) => {
		try {
			await addCommentById(accessToken, workOrder._id, comment._id);
			await fetchWorkOrder();
		} catch (err) {
			alert("Unable to add comment.");
			console.log(err.message);
		}
	};

	const removeComment = async (comment) => {
		try {
			await removeCommentById(accessToken, workOrder._id, comment._id);
			await fetchWorkOrder();
		} catch (err) {
			alert("Unable to remove comment.");
			console.log(err.message);
		}
	};

	if (!workOrder?._id) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<form className="column gap-1">
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
			{workOrder?.comments && !canEdit && (
				<WorkOrderComments
					comments={workOrder.comments}
					addComment={addComment}
					removeComment={removeComment}
				/>
			)}
		</>
	);
};

export default WorkOrderForm;
