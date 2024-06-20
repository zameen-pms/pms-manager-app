import { axiosAuth } from "../axios";

const updatePropertyById = async (token, id, body) => {
	try {
		const response = await axiosAuth(token).put(`/properties/${id}`, body);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default updatePropertyById;
