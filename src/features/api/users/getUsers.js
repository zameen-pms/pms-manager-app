import { axiosAuth } from "../axios";

const getUsers = async (accessToken, query = "") => {
	try {
		const response = await axiosAuth(accessToken).get(`/users?${query}`);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getUsers;
