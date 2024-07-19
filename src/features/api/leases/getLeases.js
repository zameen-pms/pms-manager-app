import { axiosAuth } from "../axios";

const getLeases = async (token, params) => {
	try {
		const response = await axiosAuth(token).get("/leases", { params });
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getLeases;
