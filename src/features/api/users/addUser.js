import { axiosAuth } from "../axios";

const addUser = async (accessToken, body) => {
	try {
		const response = await axiosAuth(accessToken).post(`/users`, body);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default addUser;
