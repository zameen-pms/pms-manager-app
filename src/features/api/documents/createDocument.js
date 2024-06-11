import { axiosAuth } from "../axios";

const createDocument = async (token, body) => {
	try {
		const response = await axiosAuth(token).post("/documents", body);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default createDocument;
