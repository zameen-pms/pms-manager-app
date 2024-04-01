import { axiosAuth } from "../axios";

const createProperty = async (accessToken, body) => {
	try {
		const response = await axiosAuth(accessToken).post(`/properties`, body);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default createProperty;
