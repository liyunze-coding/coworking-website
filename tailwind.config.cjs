/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                "gradient-blob":
                    "linear-gradient(to right, #FF7782, rgba(0,0,0,0))",
                "gradient-pink-cyan":
                    "linear-gradient(to right, #FF7782, #8CC0DE)",
            }),
            keyframes: {
                rotate: {
                    "0%": { transform: "rotate(0deg)" },
                    "50%": { scale: "1 1.5" },
                    "100%": { transform: "rotate(360deg)" },
                },
            },
            animation: {
                "spin-slow": "rotate 5s linear infinite",
            },
            colors: {
                "cowo-pink": "#FF7782",
                "secondary": "#171717",
                "primary": "#fafafa",
            },
        },
    },
    variants: {
        extend: {
            backgroundImage: ["responsive", "hover", "focus", "active"],
        },
    },
    plugins: [],
};
