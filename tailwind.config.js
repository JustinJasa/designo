const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			width: {
				card: '350px',
				'service-card': '541px',
				'card-mobile': '327px',
			},
			height: {
				card: '478px',
				'service-card': '308px',
				'card-mobile': '250px',
			},
			backgroundImage: (theme) => ({
				'service-web': "url('/assets/home/desktop/image-web-design-large.jpg')",
				'service-app':
					"url('/public/assets/home/desktop/image-app-design.jpg')",
				'service-graphic':
					"url('/assets/home/desktop/image-graphic-design.jpg')",
			}),
		},
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
				card: '#FDF3F0',
			},
		},
		fontSize: {
			sm: '12px',
			mobile: '14px',
			base: '16px',
			medium: '20px',
			lg: '24px',
			h3: '32px',
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
