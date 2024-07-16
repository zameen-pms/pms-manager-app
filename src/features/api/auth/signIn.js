import axios from "../axios";

const handleLogin = async (email, password) => {
	try {
		const response = await axios.post("/auth/login", { email, password });
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default handleLogin;
