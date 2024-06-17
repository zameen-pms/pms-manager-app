import { axiosAuth } from "../axios";

const createComment = async (token, body) => {
	try {
		const response = await axiosAuth(token).post("/comments", body);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default createComment;
