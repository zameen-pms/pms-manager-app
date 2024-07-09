import getAsset from "../api/assets/getAsset";

export const downloadAsset = async (token, key) => {
	try {
		const { data: presignedUrl } = await getAsset(token, key);
		window.open(presignedUrl, "_blank");
	} catch (err) {
		alert("Unable to download asset.");
		console.log(err.message);
	}
};
