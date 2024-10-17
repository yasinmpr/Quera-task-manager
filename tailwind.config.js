/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                "3xl": "0 12px 50px 0px #0000002E",
            },
        },
    },
    plugins: [],
};
