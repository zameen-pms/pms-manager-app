import { axiosAuth } from "../axios";

const updatePropertyDataById = async (token, id, body) => {
	try {
		const response = await axiosAuth(token).put(
			`/propertyData/${id}`,
			body
		);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default updatePropertyDataById;
