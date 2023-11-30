/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
		  'prompt': ['"Prompt"', 'sans-serif'],
		},
		extend: {
		  colors: {
			'primary': '#FF4500',
			'gray': '#272727',
			'dark': '#131313',
			'footerText': '#9CA3AF',
		  },
		},
	  },
	plugins: [],
}
