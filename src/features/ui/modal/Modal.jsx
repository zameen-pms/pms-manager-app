import { StyledModal } from "./Modal.styled";
import { MdClose } from "react-icons/md";
import useOutsideClick from "../../hooks/useOutsideClick";

const Modal = (props) => {
	const modalRef = useOutsideClick(props.setShowModal);

	return (
		<StyledModal>
			<div className="modal" ref={modalRef}>
				<div className="modal-header">
					<h4>{props?.title}</h4>
					<MdClose onClick={() => props.setShowModal(false)} />
				</div>
				{props.children}
			</div>
		</StyledModal>
	);
};

export default Modal;
