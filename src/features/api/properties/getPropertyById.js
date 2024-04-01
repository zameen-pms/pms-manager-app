import { axiosAuth } from "../axios";

const getPropertyById = async (accessToken, id) => {
	try {
		const response = await axiosAuth(accessToken).get(`/properties/${id}`);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getPropertyById;
