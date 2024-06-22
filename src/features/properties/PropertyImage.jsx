import { StyledPropertyImage } from "./Properties.styled";
import { MdDelete } from "react-icons/md";
import { URL } from "../../constants";

const PropertyImage = ({ fileKey, deleteImage }) => {
	return (
		<StyledPropertyImage>
			<img src={`${URL}/assets/url/${fileKey}`} alt="Property" />
			<MdDelete onClick={() => deleteImage(fileKey)} />
		</StyledPropertyImage>
	);
};

export default PropertyImage;
