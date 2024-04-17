import { useSelector } from "react-redux";
import PropertyForm from "../../features/property/PropertyForm";
import PageTitle from "../../features/ui/pageTitle/PageTitle";
import { getUser } from "../../features/app/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import createLease from "../../features/api/leases/createLease";
import createSingleFamily from "../../features/api/singleFamilies/createSingleFamily";

const AddProperty = () => {
	const user = useSelector(getUser);
	const navigate = useNavigate();
	const [property, setProperty] = useState({
		address: {
			street: "",
			city: "",
			state: "",
			zip: "",
		},
		manager: "",
		metaData: {
			purchasePrice: "",
			squareFootage: "",
			bedrooms: "",
			bathrooms: "",
			yearBuilt: "",
		},
	});

	useEffect(() => {
		if (user?._id) {
			setProperty({ ...property, manager: user._id });
		}
	}, [user]);

	const handleSave = async (e) => {
		e?.preventDefault();
		try {
			const { data: leaseData } = await createLease(user.accessToken);

			const propertyRequest = {
				address: property.address,
				manager: property.manager,
				lease: leaseData._id,
				metaData: property.metaData,
			};
			await createSingleFamily(user.accessToken, propertyRequest);
			alert("Property has been created.");

			navigate("/properties");
		} catch (err) {
			alert("Unable to create new property.");
			console.log(err);
		}
	};

	return (
		<section className="column gap-3">
			<PageTitle showBack>Create New Property</PageTitle>
			<PropertyForm
				property={property}
				setProperty={setProperty}
				canEdit={true}
				handleSave={handleSave}
			/>
		</section>
	);
};

export default AddProperty;
