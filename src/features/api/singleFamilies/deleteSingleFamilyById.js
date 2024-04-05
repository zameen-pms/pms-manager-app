import { axiosAuth } from "../axios";

const deleteSingleFamilyById = async (accessToken, id) => {
	try {
		const response = await axiosAuth(accessToken).delete(
			`/singleFamilies/${id}`
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default deleteSingleFamilyById;
