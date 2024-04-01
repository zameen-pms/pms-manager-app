import { axiosAuth } from "../axios";

const propertyAddUnit = async (accessToken, propertyId, unitId) => {
	try {
		const response = await axiosAuth(accessToken).post(
			`/properties/${propertyId}/units/${unitId}`
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default propertyAddUnit;
