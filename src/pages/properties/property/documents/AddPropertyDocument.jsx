import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setContent } from "../../../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AddDocumentForm from "../../../../features/properties/documents/AddDocumentForm";

const AddPropertyDocument = ({ property }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row align-center gap-05">
					<MdArrowBack
						className="back-arrow"
						onClick={() => navigate(-1)}
					/>
					<h3>
						{property?.address?.street || "Property Info"} - Add
						Document
					</h3>
				</div>
			)
		);
	}, [property]);

	return <AddDocumentForm />;
};

export default AddPropertyDocument;
