import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContent } from "../../../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../../../features/app/authSlice";
import getDocumentById from "../../../../features/api/documents/getDocumentById";
import Button from "../../../../features/ui/button/Button";
import removeAssetByKey from "../../../../features/api/assets/removeAssetByKey";
import deleteDocumentById from "../../../../features/api/documents/deleteDocumentById";
import DocumentForm from "../../../../features/properties/documents/DocumentForm";

const PropertyDocument = ({ property }) => {
	const { accessToken } = useSelector(getUser);
	const { documentId } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [document, setDocument] = useState(null);

	const fetchDocument = async () => {
		try {
			const { data } = await getDocumentById(accessToken, documentId);
			setDocument(data);
		} catch (err) {
			alert("Unable to fetch document.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchDocument();
	}, []);

	const handleDelete = async () => {
		try {
			const message = "Are you sure you want to delete this document?";
			if (!confirm(message)) {
				return;
			}
			await removeAssetByKey(accessToken, document.file);
			await deleteDocumentById(accessToken, documentId);
			alert("Document has been deleted.");
			navigate(`/properties/${property._id}/documents`);
		} catch (err) {
			alert("Unable to delete document.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row align-center justify-sb">
					<div className="row align-center gap-05">
						<MdArrowBack
							className="back-arrow"
							onClick={() => navigate(-1)}
						/>
						<h3>
							{property?.address?.street || "Property Info"} -
							Document
						</h3>
					</div>
					{document?.file && (
						<Button onClick={handleDelete}>Delete Document</Button>
					)}
				</div>
			)
		);
	}, [property]);

	return <DocumentForm document={document} />;
};

export default PropertyDocument;
