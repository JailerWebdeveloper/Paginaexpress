/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ["cupcake", "dark", "cmyk",
			{
				Transemco:{
					"primary": "#099e5b",
          
 					"secondary": "#01b0f2",
          
                    "accent": "#44d4f7",
          
                    "neutral": "#070d3a",
          
                    "base-100": "#c8f6ed",
                             
                    "info": "#00ecff",
          
                    "success": "#1d8800",
          
                    "warning": "#ffca00",
          
                    "error": "#ff4d60",
				}
			}],
	  },
	plugins: [require("daisyui")],
}
