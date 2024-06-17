import { axiosAuth } from "../axios";

const addCommentById = async (accessToken, workOrderId, commentId) => {
	try {
		const response = await axiosAuth(accessToken).post(
			`/workOrders/${workOrderId}/comments/${commentId}`
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default addCommentById;
