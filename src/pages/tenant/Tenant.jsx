import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getUserById from "../../features/api/users/getUserById";
import { useSelector } from "react-redux";
import { getUser } from "../../features/app/authSlice";
import TenantForm from "../../features/tenant/TenantForm";
import PageTitle from "../../features/ui/pageTitle/PageTitle";

const Tenant = () => {
	const user = useSelector(getUser);
	const { tenantId } = useParams();
	const [tenant, setTenant] = useState({});

	const getTenant = async () => {
		try {
			const response = await getUserById(user.accessToken, tenantId);
			setTenant(response.data);
		} catch (err) {
			alert("Unable to fetch tenant.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		getTenant();
	}, []);

	return (
		<>
			<PageTitle showBack>Tenant Information</PageTitle>
			<TenantForm tenant={tenant} />
		</>
	);
};

export default Tenant;
