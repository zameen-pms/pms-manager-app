export const getDollarAmount = (amount) => {
	if (isNaN(amount)) {
		throw new Error("Input is not a number");
	}
	return `$${amount.toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})}`;
};