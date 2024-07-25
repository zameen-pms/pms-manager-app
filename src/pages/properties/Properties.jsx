import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../features/ui/button/Button";
import { setContent } from "../../features/app/globalSlice";
import PropertiesTable from "../../features/properties/PropertiesTable";
import { getUser } from "../../features/app/authSlice";
import getProperties from "../../features/api/properties/getProperties";
import { MdArrowBack } from "react-icons/md";
import Input from "../../features/ui/input/Input";

const Properties = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { accessToken } = useSelector(getUser);
	const [properties, setProperties] = useState([]);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");

	const fetchProperties = async () => {
		try {
			setLoading(true);
			const { data } = await getProperties(accessToken, {});
			setProperties(data.reverse());
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
				<div className="row justify-sb align-center">
					<div className="row align-center gap-05">
						<MdArrowBack
							className="back-arrow"
							onClick={() => navigate(-1)}
						/>
						<h3>Properties</h3>
					</div>
					<Button onClick={() => navigate("add")}>
						Add Property
					</Button>
				</div>
			)
		);
	}, []);

	return (
		<div className="column gap-05">
			<Input
				label="Search Address..."
				placeholder="Search by street, city, or state"
				value={search || ""}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<PropertiesTable
				loading={loading}
				properties={properties}
				search={search}
			/>
		</div>
	);
};

export default Properties;
