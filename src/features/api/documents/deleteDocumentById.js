import { axiosAuth } from "../axios";

const deleteDocumentById = async (token, id) => {
	try {
		const response = await axiosAuth(token).delete(`/documents/${id}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default deleteDocumentById;
