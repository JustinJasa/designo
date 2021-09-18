const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: {
				DEFAULT: '#1D1C1E',
			},
			white: colors.white,
			gray: {
				DEFAULT: 'grey',
				light: '#F1F3F5',
				dark: '#333136',
			},
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber,
			peach: {
				DEFAULT: '#e7816b',
				light: '#FFAD9B',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
