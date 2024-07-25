import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContent } from "../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../features/app/authSlice";
import getProperties from "../../features/api/properties/getProperties";
import getApplications from "../../features/api/applications/getApplications";
import Dropdown from "../../features/ui/dropdown/Dropdown";
import Tab from "../../features/ui/tab/Tab";
import ApplicationsTable from "../../features/applications/ApplicationsTable";

const Applications = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { accessToken } = useSelector(getUser);
	const [status, setStatus] = useState("All");
	const [applications, setApplications] = useState(null);
	const [properties, setProperties] = useState(null);
	const [loading, setLoading] = useState(false);
	const [selectedProperty, setSelectedProperty] = useState({
		id: "All",
		value: "All",
	});

	const fetchApplications = async () => {
		try {
			setLoading(true);
			const params = {};
			if (status !== "All") {
				params.status = status;
			}
			if (selectedProperty.value !== "All") {
				params.property = selectedProperty.id;
			}
			const { data } = await getApplications(accessToken, params);
			setApplications(data.reverse());
		} catch (err) {
			alert("Unable to fetch applications.");
			console.log(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchApplications();
	}, [status, selectedProperty]);

	const fetchProperties = async () => {
		try {
			setLoading(true);
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
			console.log(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProperties();
	}, []);

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row align-center gap-05">
					<MdArrowBack
						className="back-arrow"
						onClick={() => navigate(-1)}
					/>
					<h3>Applications</h3>
				</div>
			)
		);
	}, []);

	if (!applications) return <p>Retrieving applications...</p>;
	if (!properties) return <p>Retrieving properties...</p>;

	return (
		<>
			<Dropdown
				label="Filter By Property"
				options={properties}
				value={selectedProperty.value}
				onChange={(option) => setSelectedProperty(option)}
			/>
			<Tab
				options={["All", "In-Progress", "Approved", "Rejected"]}
				tab={status}
				setTab={setStatus}
			/>
			<ApplicationsTable loading={loading} applications={applications} />
		</>
	);
};

export default Applications;
