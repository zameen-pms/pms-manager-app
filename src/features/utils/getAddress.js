export const getAddress = (address) => {
	try {
		return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
	} catch (err) {
		return "";
	}
};
