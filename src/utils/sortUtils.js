export const sortAlphabetically = (array, direction) => {
	if (!Array.isArray(array)) return [];

	const sortedArray = array.toSorted((a, b) => {
		let fa = a.title.toLowerCase();
		let fb = b.title.toLowerCase();

		if (fa < fb) return direction === "az" ? -1 : 1;

		if (fa > fb) return direction === "az" ? 1 : -1;

		return 0;
	});
	return sortedArray;
};
