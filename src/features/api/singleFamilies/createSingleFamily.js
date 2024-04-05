import { axiosAuth } from "../axios";

const createSingleFamily = async (accessToken, body) => {
	try {
		const response = await axiosAuth(accessToken).post(
			`/singleFamilies`,
			body
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default createSingleFamily;
