import { axiosAuth } from "../axios";

const getPropertyDataById = async (token, id) => {
	try {
		const response = await axiosAuth(token).get(`/propertyData/${id}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getPropertyDataById;
