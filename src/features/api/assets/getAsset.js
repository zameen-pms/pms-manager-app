import { axiosAuth } from "../axios";

const getAsset = async (token, key) => {
	try {
		const response = await axiosAuth(token).get(`/assets/${key}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getAsset;
