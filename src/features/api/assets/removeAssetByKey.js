import { axiosAuth } from "../axios";

const removeAssetByKey = async (token, key) => {
	try {
		const response = await axiosAuth(token).delete(`/assets/${key}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default removeAssetByKey;
