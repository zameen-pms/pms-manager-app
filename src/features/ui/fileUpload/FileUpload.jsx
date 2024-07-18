import { MdUploadFile } from "react-icons/md";
import { StyledFileUpload } from "./FileUpload.styled";
import { useState } from "react";

const FileUpload = ({
	allowedTypes,
	setSelectedFiles,
	multiple = true,
	text,
}) => {
	const [errors, setErrors] = useState([]);

	const handleFileChange = (event) => {
		const files = Array.from(event.target.files);
		const validFiles = [];
		const newErrors = [];
		if (multiple) {
			files.forEach((file) => {
				if (allowedTypes.includes(file.type)) {
					setSelectedFiles((prevFiles) => {
						const fileExists = prevFiles.some(
							(prevFile) => prevFile.name === file.name
						);
						if (!fileExists) {
							validFiles.push(file);
						} else {
							newErrors.push(
								`File already uploaded: ${file.name}`
							);
						}
						return prevFiles;
					});
				} else {
					newErrors.push(`File type not allowed: ${file.name}`);
				}
			});

			setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);
			setErrors(newErrors);
		} else {
			setSelectedFiles([files[0]]);
		}
	};

	return (
		<StyledFileUpload>
			<ul>
				{errors.length > 0 && <p>Errors:</p>}
				{errors.map((error, index) => (
					<li key={index}>{error}</li>
				))}
			</ul>
			<label htmlFor="file-upload">
				<MdUploadFile />
				{text || "Upload Image(s)"}
			</label>
			<input
				id="file-upload"
				type="file"
				multiple={multiple}
				onChange={handleFileChange}
				accept={allowedTypes.join(",")}
				hidden
			/>
		</StyledFileUpload>
	);
};

export default FileUpload;
