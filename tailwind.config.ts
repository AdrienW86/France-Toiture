import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1857b4', // Bleu Ardoise (Base)
          red: '#DC143C',  // Rouge Action (Boutons seulement)
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
export default config;