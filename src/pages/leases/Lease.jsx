import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../features/app/authSlice";
import getLeaseById from "../../features/api/leases/getLeaseById";
import { useEffect, useState } from "react";
import deleteLeaseById from "../../features/api/leases/deleteLeaseById";
import { setContent } from "../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import Button from "../../features/ui/button/Button";
import ViewLease from "../../features/leases/ViewLease";

const Lease = () => {
	const { leaseId } = useParams();
	const { accessToken } = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [lease, setLease] = useState(null);

	const fetchLease = async () => {
		try {
			const { data } = await getLeaseById(accessToken, leaseId);
			setLease(data);
		} catch (err) {
			alert("Unable to fetch lease.");
			navigate("/leases");
		}
	};

	useEffect(() => {
		fetchLease();
	}, []);

	const handleDelete = async () => {
		if (
			!confirm(
				"Are you sure you want to delete this lease? This action cannot be undone."
			)
		) {
			return;
		}
		try {
			await deleteLeaseById(accessToken, leaseId);
			alert("Lease has been deleted.");
			navigate("/leases");
		} catch (err) {
			alert("Unable to delete lease.");
		}
	};

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row justify-sb align-center">
					<div className="row align-center gap-05">
						<MdArrowBack
							className="back-arrow"
							onClick={() => navigate("/leases")}
						/>
						{lease?.contract?.title ? (
							<h3>{lease.contract.title}</h3>
						) : (
							<h3>Lease</h3>
						)}
					</div>
					<Button onClick={handleDelete}>Delete</Button>
				</div>
			)
		);
	}, [lease]);

	if (!lease) return <p>Loading Lease...</p>;

	return <ViewLease lease={lease} />;
};

export default Lease;
