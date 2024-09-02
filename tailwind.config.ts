import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"node_modules/daisyui/dist/**/*.js",
		"node_modules/react-daisyui/dist/**/*.js"
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
			}
		}
	},
	daisyui: {
		themes: [
			{
				default: {
					"primary": "#BE1111",
					"secondary": "#262525",
					"primedText": "#555353",
					"primedFooter": "#272727",
					"primedService": "#F6B0CA",
					"footerTextColor": "#EFEBEB",
					"neutral": "#FFFFFF",
					"success": "#00FF00",
					"warning": "#FFCC00",
					"error": "#FF0000"
				}
			}
		]
	},
	plugins: [ require("daisyui") ]
};
export default config;
