/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				navbar: '90rem',
				navbarBreakpoint: '1100px'
			},
			maxWidth: {
				navbar: '90rem',
				navbarBreakpoint: '1100px'
			},
			colors: {
				primary: '#97C00E',
				secondary: '#be185d',
				primaryPalet: {
					50: '#FBFFE6',
					100: '#F6FEC9',
					200: '#EAFC9A',
					300: '#D8F75F',
					400: '#C4EC2F',
					500: '#97C00E',
					600: '#80A808',
					700: '#61800B',
					800: '#4D650F',
					900: '#415512',
					950: '#212F04'
				}
			}
		}
	},
	plugins: []
};
