import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/auth/sign-in");
		}, 5000);
	});

	return (
		<>
			<h1>Unauthorized</h1>
			<p>Redirecting...</p>
		</>
	);
};

export default Unauthorized;
