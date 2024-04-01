import { useDispatch } from "react-redux";
import { setUser } from "../app/authSlice";
import axios from "../api/axios";

const useRefreshToken = () => {
	const dispatch = useDispatch();

	const refresh = async () => {
		try {
			const response = await axios.post("/auth/refresh");
			dispatch(setUser({ ...response.data }));
			return response?.data?.accessToken;
		} catch (err) {
			console.log(err);
			return err;
		}
	};

	return refresh;
};

export default useRefreshToken;
