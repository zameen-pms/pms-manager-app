import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setContent } from "../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import Button from "../../features/ui/button/Button";
import UsersTable from "../../features/users/UsersTable";
import Tab from "../../features/ui/tab/Tab";
import { getUser } from "../../features/app/authSlice";
import getUsers from "../../features/api/users/getUsers";

const Users = () => {
	const user = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [users, setUsers] = useState([]);
	const [role, setRole] = useState("All");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row justify-sb">
					<div className="row align-center gap-05">
						<MdArrowBack
							className="back-arrow"
							onClick={() => navigate(-1)}
						/>
						<h3>Users</h3>
					</div>
					<Button onClick={() => navigate("add")}>Add User</Button>
				</div>
			)
		);
	}, []);

	const fetchUsers = async () => {
		try {
			setLoading(true);
			const params = role === "All" ? {} : { role: role };
			const { data } = await getUsers(user.accessToken, params);
			setUsers(data);
		} catch (err) {
			alert("Unable to fetch users.");
			console.log(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, [role]);

	return (
		<>
			<Tab
				options={["All", "Owner", "Manager", "Tenant"]}
				tab={role}
				setTab={setRole}
			/>
			<UsersTable loading={loading} users={users} />
		</>
	);
};

export default Users;
