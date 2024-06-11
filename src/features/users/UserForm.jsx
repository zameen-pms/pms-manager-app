import Dropdown from "../ui/dropdown/Dropdown";
import Input from "../ui/input/Input";

const UserForm = ({ loading, canEdit, user, setUser }) => {
	return (
		<>
			{loading ? (
				<p>Loading...</p>
			) : (
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
						<Input
							label="Role"
							value={user?.role}
							readOnly
							disabled
						/>
						<Dropdown
							label="Status"
							options={[
								{ value: "Active" },
								{ value: "Disabled" },
							]}
							onChange={(e) =>
								setUser({ ...user, status: e.value })
							}
							value={user?.status}
							disabled={!canEdit}
						/>
					</div>
				</form>
			)}
		</>
	);
};

export default UserForm;
