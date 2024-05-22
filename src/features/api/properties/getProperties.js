import { axiosAuth } from "../axios";

const getProperties = async (token, query = "") => {
	try {
		const response = await axiosAuth(token).get(`/properties?${query}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getProperties;
