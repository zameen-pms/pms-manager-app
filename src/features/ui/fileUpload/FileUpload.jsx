import { useSelector } from "react-redux";
import uploadAsset from "../../api/assets/uploadAsset";
import { StyledFileUpload, StyledUploadedFile } from "./FileUpload.styled";
import { getUser } from "../../app/authSlice";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import removeAssetByKey from "../../api/assets/removeAssetByKey";

const FileUpload = ({ allowedTypes, file, setFile, required }) => {
	const { accessToken } = useSelector(getUser);
	const [deleting, setDeleting] = useState(false);

	const handleUploadFile = async (selectedFile) => {
		try {
			const { data } = await uploadAsset(accessToken, selectedFile);
			setFile(data);
		} catch (err) {
			alert("Unable to upload file.");
			console.log(err.message);
		}
	};

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file && allowedTypes.includes(file.type)) {
			handleUploadFile(file);
		} else {
			setSelectedFile(null);
			alert("Please select a valid file type");
		}
	};

	const handleDeleteAsset = async () => {
		try {
			setDeleting(true);
			await removeAssetByKey(accessToken, file);
			setFile(null);
		} catch (err) {
			alert("Unable to delete asset.");
			console.log(err.message);
		} finally {
			setDeleting(false);
		}
	};

	return (
		<>
			{file ? (
				<StyledUploadedFile>
					<p>{file}</p>
					{deleting ? (
						<p className="deleting-text">Deleting...</p>
					) : (
						<MdDelete onClick={handleDeleteAsset} />
					)}
				</StyledUploadedFile>
			) : (
				<StyledFileUpload>
					<input
						type="file"
						accept={allowedTypes.join(",")}
						onChange={handleFileChange}
						required={required || false}
					/>
				</StyledFileUpload>
			)}
		</>
	);
};

export default FileUpload;
