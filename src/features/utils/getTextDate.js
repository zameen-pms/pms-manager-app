const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export const getTextDate = (date) => {
	if (date.split("-").length !== 3) return "";
	const [year, month, day] = date.split("-");
	return `${months[parseInt(month - 1)]} ${day}, ${year}`;
};
