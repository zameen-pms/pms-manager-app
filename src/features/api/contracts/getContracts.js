import { axiosAuth } from "../axios";

const getContracts = async (token, params) => {
	try {
		const response = await axiosAuth(token).get("/contracts", { params });
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getContracts;
