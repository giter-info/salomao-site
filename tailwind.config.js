/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/bg-main.png')",
      },
      colors: {
        "rt-primary": "#85F2CA",
        "rt-info": "#BDF2D9",
        "rt-green": "#1B402B",
        "rt-white": "#F2F0EB",
        "rt-dark": "#0D0D0D",
      },
    },
  },
  plugins: [],
};
