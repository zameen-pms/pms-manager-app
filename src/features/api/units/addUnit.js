import { axiosAuth } from "../axios";

const addUnit = async (accessToken, unit) => {
	try {
		const response = await axiosAuth(accessToken).post(`/units`, unit);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default addUnit;
