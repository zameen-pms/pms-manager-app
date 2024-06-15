import { axiosAuth } from "../axios";

const getWorkOrders = async (accessToken, params) => {
	try {
		const response = await axiosAuth(accessToken).get("/workOrders", {
			params,
		});
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getWorkOrders;
