import { useSelector } from "react-redux";
import { getUser } from "../../app/authSlice";
import { saveAs } from "file-saver";
import Button from "../../ui/button/Button";
import getAssetByKey from "../../api/assets/getAssetByKey";

const DocumentForm = ({ document }) => {
	const { accessToken } = useSelector(getUser);

	const downloadAsset = async () => {
		try {
			const { data } = await getAssetByKey(accessToken, document.file);
			saveAs(data, document.file);
		} catch (err) {
			alert("Unable to download asset");
			console.log(err.message);
		}
	};

	return (
		<>
			{document?.file && (
				<Button onClick={downloadAsset}>Download Asset</Button>
			)}
		</>
	);
};

export default DocumentForm;
