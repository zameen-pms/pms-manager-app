import { useEffect, useState } from "react";
import getProperties from "../../features/api/properties/getProperties";
import { useSelector } from "react-redux";
import { getUser } from "../../features/app/authSlice";

const WorkOrders = () => {
	const user = useSelector(getUser);
	const [properties, setProperties] = useState([]);
	const [selectedProperty, setSelectedProperty] = useState("");

	const fetchProperties = async () => {
		try {
			const { data } = await getProperties(user.accessToken);
			const propertyData = data.map((property) => ({
				value: property?._id,
				text: property?.address?.street,
			}));
			setProperties([{ value: "", text: "All" }, ...propertyData]);
		} catch (err) {
			console.log(err);
			alert("Unable to fetch properties.");
		}
	};

	useEffect(() => {
		fetchProperties();
	}, []);

	const handlePropertyChange = (e) => {
		setSelectedProperty(e.target.value);
	};

	return (
		<>
			<select
				id="properties"
				value={selectedProperty}
				onChange={handlePropertyChange}
			>
				{properties?.map((property) => (
					<option value={property?.value} key={property?.value}>
						{property?.text}
					</option>
				))}
			</select>
		</>
	);
};

export default WorkOrders;
