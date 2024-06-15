import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setContent } from "../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import Button from "../../features/ui/button/Button";
import getWorkOrderById from "../../features/api/workOrders/getWorkOrderById";
import { getUser } from "../../features/app/authSlice";

const WorkOrder = () => {
	const { workOrderId } = useParams();
	const { accessToken } = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [workOrder, setWorkOrder] = useState(null);
	const [canEdit, setCanEdit] = useState(false);

	const fetchWorkOrder = async () => {
		try {
			const { data } = await getWorkOrderById(accessToken, workOrderId);
			setWorkOrder(data);
		} catch (err) {
			alert("Unable to fetch maintenance request.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchWorkOrder();
	}, []);

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row justify-sb align-center">
					<div className="row align-center gap-05">
						<MdArrowBack
							className="back-arrow"
							onClick={() => navigate(-1)}
						/>
						{workOrder ? (
							<h3>{`${workOrder.property.address.street}: ${workOrder.title}`}</h3>
						) : (
							<h3>Maintenance Request</h3>
						)}
					</div>
					<Button onClick={() => setCanEdit(!canEdit)}>
						{canEdit ? "Cancel" : "Edit Request"}
					</Button>
				</div>
			)
		);
	}, [workOrder, canEdit]);

	return <div>Work Order</div>;
};

export default WorkOrder;
