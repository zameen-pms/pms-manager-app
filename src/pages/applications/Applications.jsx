import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setContent } from "../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";

const Applications = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row align-center gap-05">
					<MdArrowBack
						className="back-arrow"
						onClick={() => navigate(-1)}
					/>
					<h3>Applications</h3>
				</div>
			)
		);
	}, []);

	return <div>Applications</div>;
};

export default Applications;
