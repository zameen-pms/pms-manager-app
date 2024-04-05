import { axiosAuth } from "../axios";

const getSingleFamilies = async (accessToken, query = "") => {
	try {
		const response = await axiosAuth(accessToken).get(
			`/singleFamilies${query}`
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getSingleFamilies;
