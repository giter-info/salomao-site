/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "root": "url('/bg-root.png')",
                "hero": "url('/bg-main.png')",
                "hero2": "url('/bg-2.png')",
            },
            colors: {
                "rt-primary": "#85F2CA",
                "rt-info": "#BDF2D9",
                "rt-green": "#1B402B",
                "rt-white": "#F2F0EB",
                "rt-dark": "#0D0D0D",
            },
            fontFamily: {
                script: ["Lucien Schoenschriftv CAT", "cursive"],
                mont: ["Montserrat", "sans-serif"],
                cardo: ["Delius", "sans-serif"],
            },
        },
    },
    plugins: [],
};
