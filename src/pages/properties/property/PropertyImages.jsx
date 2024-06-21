import { useEffect, useState } from "react";
import FileUpload from "../../../features/ui/fileUpload/FileUpload";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../features/app/authSlice";
import getPropertyById from "../../../features/api/properties/getPropertyById";
import PropertyImage from "../../../features/properties/PropertyImage";
import updatePropertyById from "../../../features/api/properties/updatePropertyById";
import { StyledPropertyImages } from "../../../features/properties/Properties.styled";
import removeAssetByKey from "../../../features/api/assets/removeAssetByKey";
import { setContent } from "../../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";

const PropertyImages = () => {
	const { propertyId } = useParams();
	const { accessToken } = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [property, setProperty] = useState(null);
	const [file, setFile] = useState("");

	const fetchProperty = async () => {
		try {
			const { data } = await getPropertyById(accessToken, propertyId);
			setProperty(data);
		} catch (err) {
			alert("Unable to fetch property.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row align-center gap-05">
					<MdArrowBack
						className="back-arrow"
						onClick={() => navigate("/properties")}
					/>
					<h3>
						{property?.address?.street || "Property Data"} - Images
					</h3>
				</div>
			)
		);
	});

	const updateProperty = async () => {
		try {
			const images = [...property?.images, file];
			await updatePropertyById(accessToken, propertyId, {
				...property,
				images,
			});
			await fetchProperty();
			setFile("");
		} catch (err) {
			alert("Unable to add image.");
			console.log(err.message);
		}
	};

	const deleteImage = async (key) => {
		try {
			if (!confirm("Are you sure you want to delete this image?")) return;
			const images = property?.images.filter((image) => image !== key);
			await updatePropertyById(accessToken, propertyId, {
				...property,
				images,
			});
			await removeAssetByKey(accessToken, key);
			await fetchProperty();
		} catch (err) {
			alert("Unable to delete image.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		if (file) {
			updateProperty();
		}
	}, [file]);

	return (
		<>
			<FileUpload
				allowedTypes={[
					"image/jpeg",
					"image/png",
					"image/heic",
					"image/heif",
					"image/webp",
				]}
				file={file}
				setFile={(file) => setFile(file)}
				required
			/>
			<StyledPropertyImages>
				{property?.images?.map((imageKey, index) => (
					<PropertyImage
						key={index}
						fileKey={imageKey}
						deleteImage={deleteImage}
					/>
				))}
			</StyledPropertyImages>
		</>
	);
};

export default PropertyImages;
