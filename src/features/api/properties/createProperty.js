import { axiosAuth } from "../axios";

const createProperty = async (token, body) => {
	try {
		const response = await axiosAuth(token).post("/properties", body);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default createProperty;
