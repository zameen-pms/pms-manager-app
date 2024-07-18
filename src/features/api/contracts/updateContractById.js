import { axiosAuth } from "../axios";

const updateContractById = async (token, id, body) => {
	try {
		const response = await axiosAuth(token).put(`/contracts/${id}`, body);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default updateContractById;
