import requestReset from "../api/auth/requestReset";
import sendEmail from "../api/email/sendMail";

const sendResetPassword = async (accessToken, user) => {
	if (!user.email) return alert("Error: user does not have an email.");
	try {
		const { data: resetToken } = await requestReset(user.email);
		await sendEmail(accessToken, {
			to: "hamzakwebdev@gmail.com",
			subject: "Set Your Password",
			message: `
					<p>Hi ${user.firstName},</p>
					<p>
						<a href="www.zameen-management.com/auth/reset-password?token=${resetToken}">Click here</a> 
						to set a new password for your account.
					</p>
					<p>Best,</p>
					<p>Zameen Management Team</p>
				`,
		});
		alert(`Sent reset password link to ${user.email}`);
	} catch (err) {
		alert("Unable to send reset password link.");
		console.log(err.message);
	}
};

export default sendResetPassword;
