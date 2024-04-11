const camelToSentence = (input) => {
	let words = input.split(/(?=[A-Z])/);
	let result = words
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
	return result;
};

export default camelToSentence;
