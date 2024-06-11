import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContent } from "../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../features/app/authSlice";
import getUserById from "../../features/api/users/getUserById";
import UserForm from "../../features/users/UserForm";
import Button from "../../features/ui/button/Button";
import updateUserById from "../../features/api/users/updateUserById";

const User = () => {
	const { userId } = useParams();
	const { accessToken } = useSelector(getUser);
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [canEdit, setCanEdit] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const fetchUser = async () => {
		try {
			setLoading(true);
			const { data } = await getUserById(accessToken, userId);
			setUser(data);
		} catch (err) {
			alert("Unable to fetch user.");
			console.log(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUser();
	}, [userId]);

	const handleSubmit = async (e) => {
		e?.preventDefault();
		try {
			await updateUserById(accessToken, userId, user);
			handleEditClick();
			alert("User has been updated.");
		} catch (err) {
			alert("Unable to save user data.");
			console.log(err.message);
		}
	};

	const handleEditClick = () => {
		if (canEdit) {
			setCanEdit(false);
			fetchUser();
		} else {
			setCanEdit(true);
		}
	};

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row align-center justify-sb">
					<div className="row align-center gap-05">
						<MdArrowBack
							className="back-arrow"
							onClick={() => navigate("/users")}
						/>
						<h3>
							{user?.firstName && user?.lastName
								? `${user.firstName} ${user.lastName}`
								: "User"}
						</h3>
					</div>
					<div className="row align-center gap-05">
						<Button onClick={handleEditClick}>
							{canEdit ? "Cancel" : "Edit"}
						</Button>
						{canEdit && (
							<Button onClick={handleSubmit}>Save</Button>
						)}
					</div>
				</div>
			)
		);
	}, [user, canEdit]);

	return (
		<UserForm
			loading={loading}
			canEdit={canEdit}
			user={user}
			setUser={setUser}
		/>
	);
};

export default User;
