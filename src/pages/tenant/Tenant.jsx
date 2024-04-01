import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getUserById from "../../features/api/users/getUserById";
import { useSelector } from "react-redux";
import { getUser } from "../../features/app/authSlice";
import TenantForm from "../../features/tenant/TenantForm";
import PageTitle from "../../features/ui/pageTitle/PageTitle";
import Button from "../../features/ui/button/Button";
import updateUserById from "../../features/api/users/updateUserById";

const Tenant = () => {
	const user = useSelector(getUser);
	const { tenantId } = useParams();
	const [tenant, setTenant] = useState({});
	const [canEdit, setCanEdit] = useState(false);

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

	const handleCancel = async () => {
		try {
			await getTenant();
		} catch (err) {
			console.log(err);
		} finally {
			setCanEdit(false);
		}
	};

	const handleSave = async (e) => {
		e?.preventDefault();
		try {
			await updateUserById(user.accessToken, tenantId, tenant);
			alert("Tenant has been saved.");
		} catch (err) {
			alert("Unable to save tenant.");
			console.log(err);
		} finally {
			setCanEdit(false);
		}
	};

	return (
		<section className="column gap-3">
			<div className="row justify-sb align-center">
				<PageTitle showBack>Tenant Information</PageTitle>
				{canEdit ? (
					<Button onClick={handleCancel}>Cancel</Button>
				) : (
					<Button onClick={() => setCanEdit(true)}>Edit</Button>
				)}
			</div>
			<TenantForm
				tenant={tenant}
				setTenant={setTenant}
				canEdit={canEdit}
				handleSave={handleSave}
			/>
		</section>
	);
};

export default Tenant;
