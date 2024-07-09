import { useSelector } from "react-redux";
import { getUser } from "../../app/authSlice";
import Button from "../../ui/button/Button";
import { downloadAsset } from "../../utils/downloadAsset";

const DocumentForm = ({ document }) => {
	const { accessToken } = useSelector(getUser);

	const download = async () => {
		try {
			await downloadAsset(accessToken, document.file);
		} catch (err) {
			alert("Unable to download asset");
			console.log(err.message);
		}
	};

	return (
		<>
			{document?.file && (
				<Button onClick={download}>Download Asset</Button>
			)}
		</>
	);
};

export default DocumentForm;
