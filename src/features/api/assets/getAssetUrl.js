import { axiosAuth } from "../axios";

const getAssetUrl = async (token, key) => {
	try {
		const response = await axiosAuth(token).get(`/assets/url/${key}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getAssetUrl;
