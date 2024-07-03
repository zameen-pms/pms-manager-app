import { axiosAuth } from "../axios";

const sendEmail = async (token, { to, subject, message }) => {
	try {
		const response = await axiosAuth(token).post("/email/send", {
			to,
			subject,
			message,
		});
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default sendEmail;
