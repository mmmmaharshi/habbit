import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Funnel Sans"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	daisyui: {
		themes: ['forest'],
	},
	plugins: [daisyui],
} satisfies Config;
