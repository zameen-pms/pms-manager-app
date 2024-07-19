import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../features/app/authSlice";
import { useEffect, useState } from "react";
import getContractById from "../../features/api/contracts/getContractById";
import { setContent } from "../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import Button from "../../features/ui/button/Button";
import deleteContractById from "../../features/api/contracts/deleteContractById";
import getAsset from "../../features/api/assets/getAsset";
import PdfViewer from "../../features/ui/pdfViewer/PdfViewer";
import Input from "../../features/ui/input/Input";
import { getTextDate } from "../../features/utils/getTextDate";

const Contract = () => {
	const { contractId } = useParams();
	const { accessToken } = useSelector(getUser);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [contract, setContract] = useState(null);
	const [url, setUrl] = useState(null);

	const fetchContract = async () => {
		try {
			const { data } = await getContractById(accessToken, contractId);
			if (data?.file) {
				const { data: file } = await getAsset(accessToken, data.file);
				setUrl(file);
			}
			setContract(data);
		} catch (err) {
			alert("Unable to fetch contract.");
			navigate("/contracts");
		}
	};

	useEffect(() => {
		fetchContract();
	}, []);

	const handleDelete = async () => {
		if (
			!confirm(
				"Are you sure you want to delete this contract? This action cannot be undone."
			)
		) {
			return;
		}
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
						{contract?.title && <h3>Contract: {contract.title}</h3>}
					</div>
					<Button onClick={handleDelete}>Delete</Button>
				</div>
			)
		);
	}, [contract]);

	if (!contract) return <p>Loading...</p>;

	return (
		<div className="column gap-2">
			<div className="grid">
				<Input
					label="Document Title"
					value={contract?.title || ""}
					readOnly
					disabled
				/>
				<Input
					label="Parties"
					value={
						contract?.parties
							?.map(
								(member) =>
									`${member?.firstName} ${member?.lastName} (${member?.role})`
							)
							.join(", ") || ""
					}
					readOnly
					disabled
				/>
				<Input
					label="Date"
					value={getTextDate(contract?.createdAt.split("T")[0]) || ""}
					readOnly
					disabled
				/>
			</div>
			{url && <PdfViewer url={url} />}
		</div>
	);
};

export default Contract;
