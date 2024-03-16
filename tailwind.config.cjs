/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                "gradient-pink-cyan":
                    "linear-gradient(to right, #F7418F,#FF7782 , aquamarine)",
            }),
            keyframes: {
                rotate: {
                    "0%": { transform: "rotate(0deg)" },
                    "50%": { scale: "1 1.5" },
                    "100%": { transform: "rotate(360deg)" },
                },
                gradient: {
                    "0%": {
                        "background-position": "0% 50%",
                    },
                    "50%": {
                        "background-position": "100% 50%",
                    },
                    "100%": {
                        "background-position": "0% 50%",
                    },
                },
            },
            animation: {
                "spin-slow": "rotate 15s linear infinite",
                gradient: "gradient 15s ease infinite",
            },
            colors: {
                "cowo-pink": "#FF7782",
                secondary: "#171717",
                primary: "#fafafa",
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
