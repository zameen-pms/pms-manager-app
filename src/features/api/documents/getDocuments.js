import { axiosAuth } from "../axios";

const getDocuments = async (token, params) => {
	try {
		const response = await axiosAuth(token).get("/documents", { params });
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getDocuments;
