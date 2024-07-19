import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../features/app/authSlice";
import { useEffect, useState } from "react";
import getLeases from "../../features/api/leases/getLeases";
import { setContent } from "../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import Dropdown from "../../features/ui/dropdown/Dropdown";
import getProperties from "../../features/api/properties/getProperties";
import LeasesTable from "../../features/leases/LeasesTable";
import Button from "../../features/ui/button/Button";

const Leases = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { accessToken } = useSelector(getUser);
	const [leases, setLeases] = useState(null);
	const [properties, setProperties] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedProperty, setSelectedProperty] = useState({
		id: "All",
		value: "All",
	});

	const fetchLeases = async () => {
		try {
			setIsLoading(true);
			const params = {};
			if (selectedProperty.value !== "All") {
				params.property = selectedProperty.id;
			}
			const { data } = await getLeases(accessToken, params);
			setLeases(data);
		} catch (err) {
			alert("Unable to fetch leases.");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchLeases();
	}, [selectedProperty]);

	const fetchProperties = async () => {
		try {
			setIsLoading(true);
			const { data } = await getProperties(accessToken);
			setProperties([
				{
					id: "All",
					value: "All",
				},
				...data.map((property) => ({
					id: property._id,
					value: property.address.street,
				})),
			]);
		} catch (err) {
			alert("Unable to fetch properties.");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchProperties();
	}, []);

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row align-center justify-sb">
					<div className="row align-center gap-05">
						<MdArrowBack
							className="back-arrow"
							onClick={() => navigate("/")}
						/>
						<h3>Leases</h3>
					</div>
					<Button onClick={() => navigate("add")}>Add Lease</Button>
				</div>
			)
		);
	}, []);

	if (!leases) return <p>Retrieving leases...</p>;
	if (!properties) return <p>Retrieving properties...</p>;

	return (
		<>
			<Dropdown
				label="Filter By Property"
				options={properties}
				value={selectedProperty.value}
				onChange={(option) => setSelectedProperty(option)}
			/>
			<LeasesTable loading={isLoading} leases={leases} />
		</>
	);
};

export default Leases;
