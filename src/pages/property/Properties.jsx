import { useSelector } from "react-redux";
import { getUser } from "../../features/app/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../features/ui/pageTitle/PageTitle";
import Button from "../../features/ui/button/Button";
import PropertyCards from "../../features/properties/PropertyCards";
import getProperties from "../../features/api/properties/getProperties";

const Properties = () => {
	const user = useSelector(getUser);
	const [properties, setProperties] = useState(null);
	const navigate = useNavigate();

	const fetchProperties = async () => {
		try {
			const { data } = await getProperties(user.accessToken);
			setProperties(data);
		} catch (err) {
			alert("Unable to fetch properties.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchProperties();
	}, []);

	return (
		<section className="column gap-3">
			<div className="row justify-sb align-center">
				<PageTitle showBack>Properties</PageTitle>
				<Button onClick={() => navigate("add")}>Add Property</Button>
			</div>
			{properties ? (
				<PropertyCards properties={properties} />
			) : (
				<h4>Loading Properties...</h4>
			)}
		</section>
	);
};

export default Properties;
