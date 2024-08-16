import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(0,70,116,1) 0%, rgba(0,144,186,1) 35%, rgba(166,240,255,1) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
