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
				DEFAULT: '#979797',
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
		fontSize: {
			sm: '12px',
			base: '16px',
			medium: '20px',
			lg: '24px',
			h2: '40px',
			h1: '48px',
		},
		/* 		backgroundImage: {
			'service-web':
				'url(./public/assets/home/desktop/image-web-design-large.jpg)',
			'service-app': 'url(./public/assets/home/desktop/image-app-design.jpg)',
			'service-graphic':
				'url(./public/assets/home/desktop/image-graphic-design.jpg)',
		}, */
		fontFamily: {
			body: ['Jost'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
