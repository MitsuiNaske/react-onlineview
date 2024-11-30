/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"custom-gradient":
					"linear-gradient(85deg, rgba(20, 22, 26, 1) 5%, rgba(255, 190, 152, 1) 100%)",

			},
			
			
		},
	},
	plugins: [],
};
