import { axiosAuth } from "../axios";

const deleteLeaseById = async (token, id) => {
	try {
		const response = await axiosAuth(token).delete(`/leases/${id}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default deleteLeaseById;
