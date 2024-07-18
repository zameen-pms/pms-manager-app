import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setContent } from "../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import { getUser } from "../../features/app/authSlice";
import createContract from "../../features/api/contracts/createContract";
import ContractForm from "../../features/contracts/ContractForm";
import uploadAsset from "../../features/api/assets/uploadAsset";

const AddContract = () => {
	const { accessToken } = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [contract, setContract] = useState({
		title: "",
		parties: [],
		file: "",
	});
	const [files, setFiles] = useState([]);

	const handleSave = async (e) => {
		e.preventDefault();
		try {
			if (contract.parties.length === 0) {
				return alert("Please select at least one party.");
			}
			const { data } = await uploadAsset(accessToken, files[0]);
			await createContract(accessToken, { ...contract, file: data });
			alert("Contract has been created.");
			navigate("/contracts");
		} catch (err) {
			alert("Unable to create new contract.");
		}
	};

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row align-center gap-05">
					<MdArrowBack
						onClick={() => navigate(-1)}
						className="back-arrow"
					/>
					<h3>Add New Contract</h3>
				</div>
			)
		);
	}, []);

	return (
		<ContractForm
			contract={contract}
			setContract={setContract}
			files={files}
			setSelectedFiles={setFiles}
			canEdit={true}
			handleSave={handleSave}
		/>
	);
};

export default AddContract;
