import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../../features/app/authSlice";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getDocuments from "../../../../features/api/documents/getDocuments";
import PropertyDocumentsTable from "../../../../features/properties/documents/PropertyDocumentsTable";
import { setContent } from "../../../../features/app/globalSlice";
import Button from "../../../../features/ui/button/Button";

const PropertyDocuments = ({ property }) => {
	const { propertyId } = useParams();
	const { accessToken } = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [documents, setDocuments] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchDocuments = async () => {
		try {
			setLoading(true);
			const { data } = await getDocuments(accessToken, {
				property: propertyId,
			});
			setDocuments(data);
		} catch (err) {
			alert("Unable to fetch documents.");
			console.log(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchDocuments();
	}, []);

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row align-center justify-sb">
					<h3>
						{property?.address?.street || "Property Info"} -
						Documents
					</h3>
					<Button onClick={() => navigate("add")}>
						Add Document
					</Button>
				</div>
			)
		);
	}, [property]);

	return <PropertyDocumentsTable loading={loading} documents={documents} />;
};

export default PropertyDocuments;
