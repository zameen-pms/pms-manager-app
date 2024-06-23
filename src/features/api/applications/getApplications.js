import { axiosAuth } from "../axios";

const getApplications = async (token, params) => {
	try {
		const response = await axiosAuth(token).get("/applications", {
			params,
		});
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getApplications;
