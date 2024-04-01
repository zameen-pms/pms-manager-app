import { useSelector } from "react-redux";
import { getUser } from "../../features/app/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
	const user = useSelector(getUser);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user?.accessToken) {
			navigate("/auth/sign-in");
			return;
		}
		navigate("/tenants");
	}, []);
};

export default Home;
