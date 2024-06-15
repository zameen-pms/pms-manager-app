import { axiosAuth } from "../axios";

const getWorkOrderById = async (accessToken, id) => {
	try {
		const response = await axiosAuth(accessToken).get(`/workOrders/${id}`);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getWorkOrderById;
