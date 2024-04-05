import { useState } from "react";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import PopupModal from "../ui/popupModal/PopupModal";
import toCamelCase from "../utils/toCamelCase";

const MetaDataPopup = ({ property, setProperty, showPopup, setShowPopup }) => {
	const [metaDataField, setMetaDataField] = useState({ label: "" });

	const createMetaData = (e) => {
		e?.preventDefault();
		try {
			const metaDataKey = toCamelCase(metaDataField.label);
			if (property.metaData.hasOwnProperty(metaDataKey)) {
				return alert("Error: Field already exists.");
			}
			setProperty({
				...property,
				metaData: {
					...property.metaData,
					[metaDataKey]: {
						label: metaDataField.label,
						value: "",
					},
				},
			});
			setMetaDataField({ label: "" });
			setShowPopup(false);
		} catch (err) {
			alert("Unable to create meta data field.");
			console.log(err.message);
		}
	};

	return (
		<PopupModal isOpen={showPopup} onClose={() => setShowPopup(false)}>
			<form onSubmit={createMetaData} className="column gap-1">
				<Input
					id="modal-label"
					label="Field Name"
					value={metaDataField?.label || ""}
					onChange={(e) =>
						setMetaDataField({
							...metaDataField,
							label: e.target.value,
						})
					}
					required
				/>
				<Button type="submit">Add Meta Data</Button>
			</form>
		</PopupModal>
	);
};

export default MetaDataPopup;
