import { axiosAuth } from "../axios";

const createLease = async (accessToken, body) => {
	try {
		const response = await axiosAuth(accessToken).post(`/leases`, body);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default createLease;
