import { axiosAuth } from "../axios";

const deleteContractById = async (token, id) => {
	try {
		const response = await axiosAuth(token).delete(`/contracts/${id}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default deleteContractById;
