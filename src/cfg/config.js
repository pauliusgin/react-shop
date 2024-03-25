export const cfg = {
	API: {
		HOST:
			process.env.NODE_ENV === "production"
				? "https://create-react-shop-api.vercel.app"
				: "http://localhost:3000",
	},
};
