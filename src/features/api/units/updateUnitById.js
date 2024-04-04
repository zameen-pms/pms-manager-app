import { axiosAuth } from "../axios";

const updateUnitById = async (accessToken, id, body) => {
	try {
		const response = await axiosAuth(accessToken).put(`/units/${id}`, body);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default updateUnitById;
