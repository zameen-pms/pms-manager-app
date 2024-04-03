import { useSelector } from "react-redux";
import PageTitle from "../../features/ui/pageTitle/PageTitle";
import { getUser } from "../../features/app/authSlice";
import { useState } from "react";
import AddTenantForm from "../../features/tenant/AddTenantForm";
import addUser from "../../features/api/users/addUser";
import { useNavigate } from "react-router-dom";

const AddTenant = () => {
	const user = useSelector(getUser);
	const [tenant, setTenant] = useState({
		firstName: "",
		lastName: "",
		email: "",
		status: "Active",
	});
	const navigate = useNavigate();

	const handleAddTenant = async (e) => {
		e?.preventDefault();
		try {
			await addUser(user.accessToken, tenant);
			alert("Tenant successfully added.");
			navigate("/tenants");
		} catch (err) {
			alert("Unable to add tenant.");
			console.log(err);
		}
	};

	return (
		<section className="column gap-3">
			<PageTitle showBack>Add Tenant</PageTitle>
			<AddTenantForm
				tenant={tenant}
				setTenant={setTenant}
				handleSave={handleAddTenant}
			/>
		</section>
	);
};

export default AddTenant;
