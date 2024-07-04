import { useEffect, useState } from "react";
import updatePropertyById from "../api/properties/updatePropertyById";
import { useSelector } from "react-redux";
import { getUser } from "../app/authSlice";
import removeAssetByKey from "../api/assets/removeAssetByKey";
import FileUpload from "../ui/fileUpload/FileUpload";
import { StyledPropertyImages } from "./Properties.styled";
import PropertyImage from "./PropertyImage";
import uploadAsset from "../api/assets/uploadAsset";

const UploadPropertyImages = ({ property, fetchProperty }) => {
	const { accessToken } = useSelector(getUser);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedFiles, setSelectedFiles] = useState([]);

	const formatFilename = (filename) => {
		let lowercased = filename.toLowerCase();
		let withUnderscores = lowercased.replace(/\s+/g, "_");
		let trimmed = withUnderscores.slice(-20);
		return trimmed;
	};

	const updatePropertyImages = async () => {
		if (isLoading) return;

		try {
			setIsLoading(true);
			const { images, _id: propertyId } = property;

			const newImages = [];
			for (let file of selectedFiles) {
				const name = formatFilename(file.name);
				if (!images.some((image) => image.name === name)) {
					const { data: key } = await uploadAsset(accessToken, file);
					const newImage = {
						key,
						name,
						description: "",
					};
					newImages.push(newImage);
				}
			}

			if (newImages.length > 0) {
				await updatePropertyById(accessToken, propertyId, {
					images: [...property.images, ...newImages],
				});
			}

			await fetchProperty();
		} catch (err) {
			console.log(err.message);
			alert("Unable to update property images.");
		} finally {
			setIsLoading(false);
		}
	};

	const deleteImage = async (key) => {
		if (isLoading) return;
		try {
			if (!confirm("Are you sure you want to delete this image?")) return;
			setIsLoading(true);
			const images = property.images.filter((image) => image.key !== key);
			await updatePropertyById(accessToken, property._id, {
				images,
			});
			await removeAssetByKey(accessToken, key);
			await fetchProperty();
		} catch (err) {
			alert("Unable to delete image.");
			console.log(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	const shiftImageToIndex = async (key, toIndex) => {
		try {
			setIsLoading(true);

			const { images } = property;

			const [image] = images.filter((img) => img.key === key);
			const otherImages = images.filter((img) => img.key !== key);

			let targetIndex = toIndex;
			if (targetIndex < 0) targetIndex = 0;
			if (targetIndex >= images.length) targetIndex = images.length - 1;

			const newImages = [];
			for (let i = 0; i < images.length; i++) {
				if (i === targetIndex) {
					newImages.push(image);
				} else {
					newImages.push(otherImages.shift());
				}
			}

			await updatePropertyById(accessToken, property._id, {
				images: newImages,
			});
			await fetchProperty();
		} catch (err) {
			console.log(err.message);
			alert("Unable to shift image.");
		} finally {
			setIsLoading(false);
		}
	};

	const addDescription = async (index) => {
		try {
			setIsLoading(true);

			const images = [...property.images];
			const description = prompt("Add a description for this image:");
			images[index] = {
				...images[index],
				description,
			};

			await updatePropertyById(accessToken, property._id, {
				images,
			});
			await fetchProperty();
		} catch (err) {
			console.log(err.message);
			alert("Unable to add description.");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		updatePropertyImages();
	}, [selectedFiles]);

	return (
		<>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<FileUpload
					allowedTypes={[
						"image/jpeg",
						"image/png",
						"image/heic",
						"image/heif",
						"image/webp",
					]}
					setSelectedFiles={setSelectedFiles}
				/>
			)}
			<StyledPropertyImages>
				{property.images.map((image, index) => (
					<PropertyImage
						key={image._id}
						index={index}
						image={image}
						deleteImage={deleteImage}
						addDescription={addDescription}
						shiftImageToIndex={shiftImageToIndex}
					/>
				))}
			</StyledPropertyImages>
		</>
	);
};

export default UploadPropertyImages;
