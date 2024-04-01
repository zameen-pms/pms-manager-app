import { axiosAuth } from "../axios";

const updatePropertyById = async (accessToken, id, body) => {
	try {
		const response = await axiosAuth(accessToken).put(
			`/properties/${id}`,
			body
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default updatePropertyById;
