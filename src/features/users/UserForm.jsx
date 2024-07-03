import { useSelector } from "react-redux";
import Button from "../ui/button/Button";
import Dropdown from "../ui/dropdown/Dropdown";
import Input from "../ui/input/Input";
import { getUser } from "../app/authSlice";
import sendResetPassword from "./sendResetPassword";

const UserForm = ({ loading, canEdit, user, setUser }) => {
	const { accessToken } = useSelector(getUser);

	const handleSendReset = async (e) => {
		e.preventDefault();
		sendResetPassword(accessToken, user);
	};

	if (loading) return <p>Loading...</p>;

	return (
		<form className="column gap-1">
			<div className="container">
				<Input
					label="First Name"
					value={user?.firstName}
					readOnly
					disabled
				/>
				<Input
					label="Last Name"
					value={user?.lastName}
					readOnly
					disabled
				/>
			</div>
			<div className="container">
				<Input label="Role" value={user?.role} readOnly disabled />
				<Dropdown
					label="Status"
					options={[{ value: "Active" }, { value: "Disabled" }]}
					onChange={(e) => setUser({ ...user, status: e.value })}
					value={user?.status}
					disabled={!canEdit}
				/>
			</div>
			<div className="container">
				<Button onClick={handleSendReset}>
					Send Reset Password Link
				</Button>
			</div>
		</form>
	);
};

export default UserForm;
