import { axiosAuth } from "../axios";

const createWorkOrder = async (token, body) => {
	try {
		const response = await axiosAuth(token).post(`/workOrders`, body);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default createWorkOrder;
