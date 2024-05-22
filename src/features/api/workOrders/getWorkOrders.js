import { axiosAuth } from "../axios";

const getWorkOrders = async (token, params = {}) => {
	try {
		const response = await axiosAuth(token).get(`/workOrders`, { params });
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getWorkOrders;
