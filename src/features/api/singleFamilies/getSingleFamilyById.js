import { axiosAuth } from "../axios";

const getSingleFamilyById = async (accessToken, id) => {
	try {
		const response = await axiosAuth(accessToken).get(
			`/singleFamilies/${id}`
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getSingleFamilyById;
