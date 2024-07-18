import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../features/app/authSlice";
import { useEffect, useState } from "react";
import getContractById from "../../features/api/contracts/getContractById";
import { setContent } from "../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import Button from "../../features/ui/button/Button";
import deleteContractById from "../../features/api/contracts/deleteContractById";

const Contract = () => {
	const { contractId } = useParams();
	const { accessToken } = useSelector(getUser);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [contract, setContract] = useState(null);
	const [canEdit, setCanEdit] = useState(false);
	const [numPages, setNumPages] = useState(null);

	const fetchContract = async () => {
		try {
			const { data } = await getContractById(accessToken, contractId);
			setContract(data);
		} catch (err) {
			alert("Unable to fetch contract.");
			navigate("/contracts");
		}
	};

	useEffect(() => {
		fetchContract();
	}, []);

	const handleEditClick = () => {
		if (canEdit) {
			setCanEdit(false);
			fetchContract();
		} else {
			setCanEdit(true);
		}
	};

	const handleDelete = async () => {
		if (
			!confirm(
				"Are you sure you want to delete this contract? This action cannot be undone."
			)
		)
			return;
		try {
			await deleteContractById(accessToken, contractId);
			alert("Contract has been deleted.");
			navigate("/contracts");
		} catch (err) {
			alert("Unable to delete contract.");
		}
	};

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row justify-sb align-center">
					<div className="row align-center gap-05">
						<MdArrowBack
							className="back-arrow"
							onClick={() => navigate("/contracts")}
						/>
						{contract?.title && <h3>{contract.title}</h3>}
					</div>
					<div className="row align-center gap-05">
						<Button onClick={handleEditClick}>
							{canEdit ? "Cancel" : "Edit"}
						</Button>
						{!canEdit && (
							<Button onClick={handleDelete}>Delete</Button>
						)}
					</div>
				</div>
			)
		);
	}, [contract, canEdit]);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	if (!contract) return <p>Loading...</p>;

	return <></>;
};

export default Contract;
