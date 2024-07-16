import { URL } from "../../constants";

export const getImageUrl = (key) => {
	return `${URL}/assets/${key}/redirect`;
};
