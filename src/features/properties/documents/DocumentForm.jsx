import { useSelector } from "react-redux";
import getAssetByKey from "../../api/assets/getAssetByKey";
import { getUser } from "../../app/authSlice";
import Button from "../../ui/button/Button";
import { saveAs } from "file-saver";
import { useEffect, useState } from "react";

const DocumentForm = ({ document }) => {
	const { accessToken } = useSelector(getUser);
	const [pdf, setPdf] = useState(null);

	const fetchAsset = async () => {
		try {
			const { data } = await getAssetByKey(accessToken, document.file);
			setPdf(data);
		} catch (err) {
			alert("Unable to fetch asset.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		if (document?.file) {
			fetchAsset();
		}
	}, [document]);

	return (
		<Button onClick={() => saveAs(pdf, document.file)}>
			Download Asset
		</Button>
	);
};

export default DocumentForm;
