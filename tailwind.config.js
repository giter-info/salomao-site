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
                "hands": "url('/bg-hands.png')",
                "units": "url('/bg-units.png')",
                "hero": "url('/bg-main.png')",
                "hero2": "url('/bg-2.png')",
                "riback": "url('/bg-ri.png')",
                "asback": "url('/bg-as.png')",
                "rtback": "url('/bg-rt.png')",
            },
            colors: {
                "rt-primary": "#85F2CA",
                "rt-info": "#BDF2D9",
                "rt-green": "#1B402B",
                "rt-white": "#F2F0EB",
                "rt-dark": "#0D0D0D",
                'ri-blue': '#2cb3b1',
                "ri-primary" : '#004148',
                "ri-green": '#033427',
                "ri-greenest": '#259289',
                "ri-bluest": '#71C8A0',
                "ri-soft-green": '#3EFEC9',
                'as-gray': '#252525',
            },
            fontFamily: {
                script: ["Lucien Schoenschriftv CAT", "cursive"],
                nunito: ["Nunito Sans", "sans-serif"],
                mont: ["Montserrat", "sans-serif"],
                cardo: ["Delius", "sans-serif"],
            },
        },
    },
    plugins: [],
};
