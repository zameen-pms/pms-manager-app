import { axiosAuth } from "../axios";

const getApplicationById = async (token, id) => {
	try {
		const response = await axiosAuth(token).get(`/applications/${id}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getApplicationById;
