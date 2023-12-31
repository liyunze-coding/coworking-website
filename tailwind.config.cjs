/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [
		function ({ addComponents, theme }) {
			addComponents({
				h1: {
					fontSize: theme("fontSize.3xl"),
					fontWeight: theme("fontWeight.bold"),
					marginBottom: theme("margin.2"),
				},
				h2: {
					fontSize: theme("fontSize.2xl"),
					fontWeight: theme("fontWeight.bold"),
					marginBottom: theme("margin.1"),
				},
				h3: {
					fontSize: theme("fontSize.xl"),
					fontWeight: theme("fontWeight.bold"),
					marginBottom: theme("margin.1"),
				},
				ul: {
					listStyleType: "disc",
					listStylePosition: "inside",
					marginBottom: theme("margin.2"),
				},
				p: {
					marginBottom: theme("margin.6"),
					lineHeight: theme("lineHeight.7"),
				},
				hr: {
					marginTop: theme("margin.6"),
					marginBottom: theme("margin.6"),
				},
			});
		},
	],
};
