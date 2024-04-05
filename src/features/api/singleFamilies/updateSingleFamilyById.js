import { axiosAuth } from "../axios";

const updateSingleFamilyById = async (accessToken, id, body) => {
	try {
		const response = await axiosAuth(accessToken).put(
			`/singleFamilies/${id}`,
			body
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default updateSingleFamilyById;
