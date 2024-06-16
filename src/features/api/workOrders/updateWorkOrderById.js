import { axiosAuth } from "../axios";

const updateWorkOrderById = async (accessToken, id, body) => {
	try {
		const response = await axiosAuth(accessToken).put(
			`/workOrders/${id}`,
			body
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default updateWorkOrderById;
