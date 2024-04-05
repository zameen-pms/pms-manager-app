import { MdClose } from "react-icons/md";
import { StyledPopupModal } from "./PopupModal.styled";

const PopupModal = (props) => {
	return (
		<StyledPopupModal>
			<div className="modal">
				<div className="row align-center justify-sb">
					<h2>{props?.title || "Modal"}</h2>
					<MdClose onClick={props?.onClose} className="close-btn" />
				</div>
				<div className="column gap-1">{props?.children}</div>
			</div>
		</StyledPopupModal>
	);
};

export default PopupModal;
