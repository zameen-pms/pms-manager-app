import { useSelector } from "react-redux";
import getAssetUrl from "../api/assets/getAssetUrl";
import { getUser } from "../app/authSlice";
import { useEffect, useState } from "react";
import { StyledPropertyImage } from "./Properties.styled";
import { MdDelete } from "react-icons/md";

const PropertyImage = ({ fileKey, deleteImage }) => {
	const { accessToken } = useSelector(getUser);
	const [url, setUrl] = useState("");

	const getUrl = async () => {
		try {
			const { data } = await getAssetUrl(accessToken, fileKey);
			setUrl(data);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		getUrl();
	}, []);

	return (
		<StyledPropertyImage>
			{url ? <img src={url} alt="Property" /> : <p>Loading image...</p>}
			<MdDelete onClick={() => deleteImage(fileKey)} />
		</StyledPropertyImage>
	);
};

export default PropertyImage;
