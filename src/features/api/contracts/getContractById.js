import { axiosAuth } from "../axios";

const getContractById = async (token, id) => {
	try {
		const response = await axiosAuth(token).get(`/contracts/${id}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getContractById;
