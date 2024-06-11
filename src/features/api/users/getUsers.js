import { axiosAuth } from "../axios";

const getUsers = async (accessToken, params) => {
	try {
		const response = await axiosAuth(accessToken).get("/users", {
			params,
		});
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getUsers;
