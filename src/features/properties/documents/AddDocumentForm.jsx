import { useState } from "react";
import Dropdown from "../../ui/dropdown/Dropdown";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import FileUpload from "../../ui/fileUpload/FileUpload";
import { useSelector } from "react-redux";
import { getUser } from "../../app/authSlice";
import createDocument from "../../api/documents/createDocument";

const documentTypes = [
	"Lease",
	"Property Management Agreement",
	"Contractor Agreement",
	"Other",
];

const AddDocumentForm = () => {
	const { propertyId } = useParams();
	const [document, setDocument] = useState({
		property: propertyId,
		type: "",
		file: "",
		description: "",
	});
	const [customType, setCustomType] = useState("");
	const { accessToken } = useSelector(getUser);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await createDocument(accessToken, document);
			alert("Document has been created.");
			navigate(`/properties/${propertyId}/documents`);
		} catch (err) {
			alert("Unable to submit form.");
			console.log(err.message);
		}
	};

	return (
		<form className="column gap-1" onSubmit={handleSubmit}>
			<div className="container">
				<Dropdown
					label="Document Type"
					options={documentTypes.map((value) => ({ value }))}
					value={document?.type}
					onChange={(e) =>
						setDocument({ ...document, type: e.value })
					}
					required
				/>
				{document?.type === "Other" && (
					<Input
						label="Enter Custom Document Type"
						value={customType}
						onChange={(e) => setCustomType(e.target.value)}
						required
					/>
				)}
			</div>
			<div className="container">
				<Input
					label="Description"
					placeholder="Enter a short description here..."
					value={document?.description}
					onChange={(e) =>
						setDocument({
							...document,
							description: e.target.value,
						})
					}
					required
				/>
			</div>
			<div className="container">
				<FileUpload
					allowedTypes={["application/pdf"]}
					file={document.file}
					setFile={(file) => setDocument({ ...document, file })}
					required
				/>
			</div>
			<Button type="submit">Add Document</Button>
		</form>
	);
};

export default AddDocumentForm;
