/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            xs: "583px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1460px",
            "3xl": "1536px",
        },
        extend: {
            screens: {
                "xs-max": { max: "582px" },
                "md-max": { max: "767px" },
                "lg-max": { max: "1023px" },
                "2xl-max": { max: "1459px" },
            },
            fontFamily: {
                "general-sans": ["GeneralSans", "sans-serif"],
            },
            colors: {
                primary: "#2463AC",
                secondery: "#DFFAE8",
                blue: "#43B6E5",
                "lite-red": "#FFF4F5",
                "primary-border": "#368FCF",
                "secondery-border": "#CFCED4",
                "active-menu": "#EE5920",
                "inactive-menu": "#43B6E5",
                "primary-text": "#1C1C1E",
                "secondery-text": "#3A383E",
                "dashboard-text": "#57555D",
                "green-text": "#306049",
                "red-text": "#99202B",
            },
        },
    },
    plugins: [require("daisyui")],
};
