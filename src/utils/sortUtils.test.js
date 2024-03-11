import { sortAlphabetically } from "./sortUtils";

const data = [{ title: "c" }, { title: "a" }, { title: "b" }];

it("should sort an array of objects by titles alphabetically", () => {
	const result = sortAlphabetically(data, "az");
	expect(result).toEqual([{ title: "a" }, { title: "b" }, { title: "c" }]);
});

it("should sort an array of objects by titles alphabetically in reverse", () => {
	const result = sortAlphabetically(data);
	expect(result).toEqual([{ title: "c" }, { title: "b" }, { title: "a" }]);
});

it("should return an empty array if 'data' is not an array", () => {
	expect(sortAlphabetically()).toEqual([]);
	expect(sortAlphabetically({})).toEqual([]);
	expect(sortAlphabetically("123")).toEqual([]);
	expect(sortAlphabetically(123)).toEqual([]);
	expect(sortAlphabetically(null)).toEqual([]);
	expect(sortAlphabetically(false)).toEqual([]);
	expect(sortAlphabetically(undefined)).toEqual([]);
});
