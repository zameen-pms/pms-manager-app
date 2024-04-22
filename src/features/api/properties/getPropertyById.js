import { axiosAuth } from "../axios";

const getPropertyById = async (token, id) => {
	try {
		const response = await axiosAuth(token).get(`/properties/${id}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getPropertyById;
