import { axiosAuth } from "../axios";

const updateUserById = async (accessToken, id, body) => {
	try {
		const response = await axiosAuth(accessToken).put(`/users/${id}`, body);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default updateUserById;
