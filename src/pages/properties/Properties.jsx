import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../features/ui/button/Button";
import { setContent } from "../../features/app/globalSlice";
import PropertiesTable from "../../features/properties/PropertiesTable";
import { getUser } from "../../features/app/authSlice";
import getProperties from "../../features/api/properties/getProperties";

const Properties = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { accessToken } = useSelector(getUser);
	const [properties, setProperties] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchProperties = async () => {
		try {
			setLoading(true);
			const { data } = await getProperties(accessToken, {});
			setProperties(data);
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
					<h3>Properties</h3>
					<Button onClick={() => navigate("add")}>
						Add Property
					</Button>
				</div>
			)
		);
	}, []);

	return <PropertiesTable loading={loading} properties={properties} />;
};

export default Properties;
