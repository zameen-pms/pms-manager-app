import { axiosAuth } from "../axios";

const updateApplicationById = async (token, id, body) => {
	try {
		const response = await axiosAuth(token).put(
			`/applications/${id}`,
			body
		);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default updateApplicationById;
