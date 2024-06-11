import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setContent } from "../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";

const AddUser = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row align-center gap-05">
					<MdArrowBack
						onClick={() => navigate(-1)}
						className="back-arrow"
					/>
					<h3>Add New User</h3>
				</div>
			)
		);
	}, []);

	return <div>Add User</div>;
};

export default AddUser;
