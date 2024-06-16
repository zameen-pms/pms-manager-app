import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../features/app/authSlice";
import { useEffect } from "react";
import { MdArrowBack } from "react-icons/md";
import { setContent } from "../../features/app/globalSlice";
import CreateWorkOrderForm from "../../features/workOrders/CreateWorkOrderForm";

const AddWorkOrder = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { accessToken } = useSelector(getUser);

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row align-center gap-05">
					<MdArrowBack
						className="back-arrow"
						onClick={() => navigate(-1)}
					/>
					<h3>Add Maintenance Request</h3>
				</div>
			)
		);
	});

	return <CreateWorkOrderForm />;
};

export default AddWorkOrder;
