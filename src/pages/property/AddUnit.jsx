import { useParams } from "react-router-dom";
import PageTitle from "../../features/ui/pageTitle/PageTitle";
import { useEffect, useState } from "react";
import AddUnitForm from "../../features/property/AddUnitForm";
import { useSelector } from "react-redux";
import { getUser } from "../../features/app/authSlice";
import getPropertyById from "../../features/api/properties/getPropertyById";
import addUnit from "../../features/api/units/addUnit";
import propertyAddUnit from "../../features/api/properties/propertyAddUnit";

const AddUnit = () => {
	const { propertyId } = useParams();
	const [property, setProperty] = useState({});
	const user = useSelector(getUser);
	const [unit, setUnit] = useState({
		number: "1",
		property: property?._id,
		tenants: [],
		status: "Available",
	});

	const fetchProperty = async () => {
		try {
			const { data } = await getPropertyById(
				user.accessToken,
				propertyId
			);
			setProperty(data);
			setUnit({ ...unit, property: data._id });
		} catch (err) {
			alert("Unable to fetch property.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	const handleSave = async (e) => {
		e?.preventDefault();
		try {
			const { data } = await addUnit(user.accessToken, unit);
			await propertyAddUnit(user.accessToken, property._id, data._id);
			alert("Unit has been added.");
		} catch (err) {
			alert("Unable to add unit.");
			console.log(err.message);
		}
	};

	return (
		<section className="column gap-3">
			<PageTitle showBack>Add a Unit</PageTitle>
			<AddUnitForm
				property={property}
				handleSave={handleSave}
				unit={unit}
				setUnit={setUnit}
			/>
		</section>
	);
};

export default AddUnit;
