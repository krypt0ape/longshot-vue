/** @type {import('tailwindcss').Config} */
export default {
    content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	  ],
  theme: {
    extend: {
		colors: {
			// These names match the ones used in figma by the designer
			brand: {
				accentBgHeader: "#182330",
				darkBg: "#0B1825",
				sidebarBg: "#071420",
				bodyBg: "#0E1725",
				accentStroke: "#273646",
				grey: "#A4ADBD",
				lightGrey: "#D9DFE8",
				darkerGrey: "#D9DFE8",
				green: "#3AAA35",
			}
		}
	},
  },
  plugins: [],
}

