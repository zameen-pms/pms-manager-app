import { axiosAuth } from "../axios";

const getDocumentById = async (token, id) => {
	try {
		const response = await axiosAuth(token).get(`/documents/${id}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getDocumentById;
