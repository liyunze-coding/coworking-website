/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                "hero-gradient":
                    "linear-gradient(to right, #3F84D8, aquamarine, #C65BCF)",
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
                fadeIn: {
                    from: {
                        opacity: "0",
                    },
                    to: {
                        opacity: "1",
                    },
                },
                scaleIn: {
                    from: {
                        transform: "scale(0)",
                    },
                    to: {
                        transform: "scale(1)",
                    },
                },
            },
            animation: {
                "spin-slow": "rotate 15s linear infinite",
                gradient: "gradient 15s ease infinite",
                fadeIn: "fadeIn 0.3s ease-in-out forwards",
                scaleIn: "scaleIn 0.3s ease-in-out forwards",
            },
            colors: {
                "cowo-pink": "#FF7782",
                secondary: "#171717",
                primary: "#fafafa",
                "primary-green": "#88D47D",
                "primary-blue": "#3F84D8",
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
