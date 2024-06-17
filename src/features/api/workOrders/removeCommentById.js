import { axiosAuth } from "../axios";

const removeCommentById = async (accessToken, workOrderId, commentId) => {
	try {
		const response = await axiosAuth(accessToken).delete(
			`/workOrders/${workOrderId}/comments/${commentId}`
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default removeCommentById;
