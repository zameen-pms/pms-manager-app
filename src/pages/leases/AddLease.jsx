import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setContent } from "../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import LeaseForm from "../../features/leases/LeaseForm";
import createLease from "../../features/api/leases/createLease";
import { getUser } from "../../features/app/authSlice";

const AddLease = () => {
	const { accessToken } = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [lease, setLease] = useState({
		property: "",
		startDate: "",
		endDate: "",
		contract: "",
		tenants: [],
		rent: "",
		rentDate: "",
		status: "",
	});

	const handleSave = async (e) => {
		e.preventDefault();
		try {
			if (lease.tenants.length === 0) {
				return alert("Please select at least one tenant.");
			}
			if (!lease?.contract) {
				return alert("Please select a contract.");
			}
			await createLease(accessToken, lease);
			alert("Lease has been created.");
			navigate("/leases");
		} catch (err) {
			alert("Unable to create new lease.");
		}
	};

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row align-center gap-05">
					<MdArrowBack
						onClick={() => navigate("/leases")}
						className="back-arrow"
					/>
					<h3>Add New Lease</h3>
				</div>
			)
		);
	}, []);

	return (
		<LeaseForm
			lease={lease}
			setLease={setLease}
			canEdit={true}
			handleSave={handleSave}
		/>
	);
};

export default AddLease;
