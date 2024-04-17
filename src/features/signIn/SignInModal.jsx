import { useState } from "react";
import Input from "../ui/input/Input";
import { StyledSignInModal } from "./SignInModal.styled";
import Button from "../ui/button/Button";
import handleLogin from "../api/auth/signIn";
import { useNavigate } from "react-router-dom";

const SignInModal = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await handleLogin(email, password);
			navigate("/properties");
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<StyledSignInModal>
			<h3>Sign In To Your Account</h3>
			<form onSubmit={handleSubmit}>
				<Input
					id="sign-in-email"
					label="Email"
					type="email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					id="sign-in-password"
					label="Password"
					type="password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button>Sign In</Button>
			</form>
		</StyledSignInModal>
	);
};

export default SignInModal;
