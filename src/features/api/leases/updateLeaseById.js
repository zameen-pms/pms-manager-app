import { axiosAuth } from "../axios";

const updateLeaseById = async (token, id, body) => {
	try {
		const response = await axiosAuth(token).put(`/leases/${id}`, body);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default updateLeaseById;
