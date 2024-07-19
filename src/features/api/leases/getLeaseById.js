import { axiosAuth } from "../axios";

const getLeaseById = async (token, id) => {
	try {
		const response = await axiosAuth(token).get(`/leases/${id}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getLeaseById;
