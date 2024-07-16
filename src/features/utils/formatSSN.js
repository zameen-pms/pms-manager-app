export const formatSSN = (input) => {
	let digits = input.replace(/\D/g, "");
	if (digits.length !== 9) {
		return "";
	}
	digits = digits.substring(0, 9);
	let formattedSSN = `${digits.slice(0, 3)}-${digits.slice(
		3,
		5
	)}-${digits.slice(5)}`;

	return formattedSSN;
};
