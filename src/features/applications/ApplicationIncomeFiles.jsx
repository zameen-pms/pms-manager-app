import { MdDownload, MdVisibility } from "react-icons/md";
import { StyledIncomeFile } from "./Applications.styled";
import { useState } from "react";
import Modal from "../ui/modal/Modal";
import { URL } from "../../constants";

const ApplicationIncomeFiles = ({ files }) => {
	const [selectedFile, setSelectedFile] = useState(null);

	const handleDownload = (file) => {
		const imageUrl = `${URL}/assets/url/${file}`;

		const link = document.createElement("a");

		link.download = "income-file";
		link.href = imageUrl;
		document.body.appendChild(link);
		link.click();

		document.body.removeChild(link);
	};

	return (
		<>
			{files.map((file, index) => (
				<StyledIncomeFile
					className="row gap-2 align-center"
					key={index}
				>
					<p>File #{index + 1}:</p>
					<div className="row gap-05">
						<MdVisibility onClick={() => setSelectedFile(file)} />
						<MdDownload onClick={() => handleDownload(file)} />
					</div>
				</StyledIncomeFile>
			))}
			{selectedFile && (
				<Modal setShowModal={setSelectedFile}>
					<img src={`${URL}/assets/url/${selectedFile}`} />
				</Modal>
			)}
		</>
	);
};

export default ApplicationIncomeFiles;
