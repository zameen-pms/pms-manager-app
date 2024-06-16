import { axiosAuth } from "../axios";

const createWorkOrder = async (accessToken, body) => {
	try {
		const response = await axiosAuth(accessToken).post("/workOrders", body);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default createWorkOrder;
