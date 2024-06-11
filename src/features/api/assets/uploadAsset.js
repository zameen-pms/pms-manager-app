import { axiosAuth } from "../axios";

const uploadAsset = async (token, file) => {
	try {
		const formData = new FormData();
		formData.append("file", file);

		const response = await axiosAuth(token).post("/assets", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default uploadAsset;
