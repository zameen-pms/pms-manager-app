import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../features/app/authSlice";
import { useEffect, useState } from "react";
import getContracts from "../../features/api/contracts/getContracts";
import { setContent } from "../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import Button from "../../features/ui/button/Button";
import ContractsTable from "../../features/contracts/ContractsTable";

const Contracts = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { accessToken } = useSelector(getUser);
	const [contracts, setContracts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchContracts = async () => {
		try {
			setIsLoading(true);
			const { data } = await getContracts(accessToken, {});
			setContracts(data);
		} catch (err) {
			alert("Unable to fetch contracts.");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchContracts();
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
						<h3>Contracts</h3>
					</div>
					<Button onClick={() => navigate("add")}>
						Add Contract
					</Button>
				</div>
			)
		);
	}, []);

	if (isLoading) return <p>Loading...</p>;

	return <ContractsTable contracts={contracts} loading={isLoading} />;
};

export default Contracts;
