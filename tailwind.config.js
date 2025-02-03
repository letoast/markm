/** @type {import('tailwindcss').Config} */
export default {
	content: ['blocks/**/*.vue'],
	theme: {
		extend: {
			aspectRatio: {
				auto: 'auto',
				square: '1 / 1',
				video: '16 / 9',
			},
		},
	},
	plugins: [],
}
