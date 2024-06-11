import { axiosAuth } from "../axios";

const getAssetByKey = async (token, key) => {
	try {
		const response = await axiosAuth(token).get(`/assets/${key}`, {
			responseType: "blob",
		});
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getAssetByKey;
