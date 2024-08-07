import { axiosAuth } from "../axios";

const createContract = async (token, body) => {
	try {
		const response = await axiosAuth(token).post("/contracts", body);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default createContract;
