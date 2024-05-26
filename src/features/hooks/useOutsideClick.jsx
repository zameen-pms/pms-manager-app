import { useEffect, useRef } from "react";

const useOutsideClick = (setShow) => {
	const ref = useRef(null);

	const handleOutsideClick = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			setShow(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	return ref;
};

export default useOutsideClick;
