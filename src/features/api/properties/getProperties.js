import { axiosAuth } from "../axios";

const getProperties = async (accessToken, query = "") => {
	try {
		const response = await axiosAuth(accessToken).get(
			`/properties?${query}`
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getProperties;
