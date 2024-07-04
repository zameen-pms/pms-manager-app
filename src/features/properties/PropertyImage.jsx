import { StyledPropertyImage } from "./Properties.styled";
import {
	MdDelete,
	MdEdit,
	MdKeyboardDoubleArrowLeft,
	MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { URL } from "../../constants";

const PropertyImage = ({
	index,
	image,
	deleteImage,
	addDescription,
	shiftImageToIndex,
}) => {
	return (
		<StyledPropertyImage>
			<img src={`${URL}/assets/url/${image.key}`} alt="Property" />
			{image.description && <p>{image.description}</p>}
			<div className="overlay">
				<MdDelete
					className="delete"
					onClick={() => deleteImage(image.key)}
				/>
				<MdEdit
					className="edit"
					onClick={() => addDescription(index)}
				/>
				<MdKeyboardDoubleArrowLeft
					className="left"
					onClick={() => shiftImageToIndex(image.key, index - 1)}
				/>
				<MdKeyboardDoubleArrowRight
					className="right"
					onClick={() => shiftImageToIndex(image.key, index + 1)}
				/>
			</div>
		</StyledPropertyImage>
	);
};

export default PropertyImage;
