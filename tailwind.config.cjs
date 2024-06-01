/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                "hero-gradient":
                    "linear-gradient(to right, #3F84D8, aquamarine)",
                "cowo-pink": "#FF7782",
                secondary: "#171717",
                primary: "#fafafa",
                "primary-green": "#8DECB4",
                "dark-green": "#45513f",
                "primary-blue": "#3F84D8",
                "light-blue": "#B3C6F9",
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
                "primary-green": "#8DECB4",
                "dark-green": "#45513f",
                "primary-blue": "#3F84D8",
                "light-blue": "#B3C6F9",
            },
            spacing: {
                auto: "auto",
            },
            fontSize: {
                initial: "initial",
            },
            fontWeight: {
                initial: "initial",
            },
        },
    },
    variants: {
        extend: {
            backgroundImage: ["responsive", "hover", "focus", "active"],
        },
    },
    plugins: [
        function ({ addBase, config }) {
            addBase({
                blockquote: {
                    margin: "1rem 0",
                    borderLeft: "4px solid #718096",
                    paddingLeft: "1rem",
                },
                a: {
                    display: "inline-block",
                    color: "#4299e1",
                    textDecoration: "none",
                },
                "a:hover": {
                    textDecoration: "underline",
                },
                h1: {
                    marginBottom: "0.5rem",
                    fontSize: "2.75rem",
                    fontWeight: "bold",
                    scrollMarginTop: "3.7rem",
                },
                h2: {
                    marginBottom: "0.5rem",
                    marginTop: "1.5rem",
                    fontSize: "1.875rem",
                    fontWeight: "bold",
                    scrollMarginTop: "3.7rem",
                },
                h3: {
                    marginBottom: "0.5rem",
                    marginTop: "1.25rem",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    scrollMarginTop: "3.7rem",
                },
                h4: {
                    marginBottom: "0.5rem",
                    marginTop: "1.25rem",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    scrollMarginTop: "3.7rem",
                },
                p: {
                    marginBottom: "0.5rem",
                    marginTop: "0.5rem",
                    fontFamily: "system-ui",
                    fontSize: "1rem",
                    lineHeight: "1.75rem",
                },
                hr: {
                    margin: "2.5rem 0",
                    // borderColor: "#add19c",
                },
                "ul, ol": {
                    listStylePosition: "outside",
                    lineHeight: "1.75rem",
                },
                ul: {
                    listStyleType: "disc",
                },
                "ul ul, ol ul": {
                    marginBottom: "0.5rem",
                    marginLeft: "1.25rem",
                    listStyleType: "circle",
                },
                "ul li, ol li": {
                    marginBottom: "0.25rem",
                    marginLeft: "1.25rem",
                },
                ol: {
                    marginLeft: "1.25rem",
                    listStyleType: "decimal",
                },
                code: {
                    borderRadius: "0.375rem",
                    backgroundColor: "#323232",
                    padding: "0.5rem 0.5rem",
                    fontFamily: "monospace",
                    fontSize: "0.875rem",
                },
            });
        },
    ],
};
