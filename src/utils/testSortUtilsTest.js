function sorting(array, method) {
	let sortedItems;
	switch (method) {
		case "0-10":
			sortedItems = array.toSorted((a, b) => a.price - b.price);
			break;
		case "10-0":
			sortedItems = array.sorted((a, b) => b.price - a.price);
			break;
		case "a-z":
			sortedItems = array.toSorted((a, b) => a.title.localeCompare(b.title));
			break;
		case "z-a":
			sortedItems = array.toSorted((a, b) => b.title.localeCompare(a.title));
			break;
		case "good":
			sortedItems = array.toSorted((a, b) => a.status - b.status);
			break;
		case "bad":
			sortedItems = array.toSorted((a, b) => b.status - a.status);
			break;
		default:
			break;
	}
	return sortedItems;
}
