import { useSelector } from "react-redux";
import { getUser } from "../../app/authSlice";
import { useEffect, useState } from "react";
import getAssetUrl from "../../api/assets/getAssetUrl";
import PdfViewer from "./pdfViewer/PdfViewer";
import { saveAs } from "file-saver";
import Button from "../../ui/button/Button";
import getAssetByKey from "../../api/assets/getAssetByKey";

const DocumentForm = ({ document }) => {
	const { accessToken } = useSelector(getUser);
	const [url, setUrl] = useState("");

	const fetchAsset = async () => {
		try {
			const { data } = await getAssetUrl(accessToken, document.file);
			setUrl(data);
		} catch (err) {
			alert("Unable to fetch asset.");
			console.log(err.message);
		}
	};

	const downloadAsset = async () => {
		try {
			const { data } = await getAssetByKey(accessToken, document.file);
			saveAs(data, document.file);
		} catch (err) {
			alert("Unable to download asset");
			console.log(err.message);
		}
	};

	useEffect(() => {
		if (document?.file) {
			fetchAsset();
		}
	}, [document]);

	return (
		<>
			{document?.file && (
				<Button onClick={downloadAsset}>Download Asset</Button>
			)}
			<>{url ? <PdfViewer url={url} /> : <p>Loading...</p>}</>
		</>
	);
};

export default DocumentForm;
