const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        fontFamily:{
            primary: "Playfair Display rev=1",
            body: "Work Sans rev=1"
        },
        container:{
            padding:{
                DEFAULT: "1rem",
                lg: "3rem"
            }
        },
        extend: {
            colors:{
                "light-primary": "#FAF1E6",
                "light-secondary": "#FDFAF6",
                "light-tail-100": "#A0DED2",
                "light-tail-500": "#54BAB9",
                "dark-primary": "#050402",
                "dark-secondary": "#1C1D24",
                "dark-tail-100": "#07567D",
                "dark-tail-500": "#292D42",
                accent: {
                    DEFAULT: "#AC6B34",
                    hover: "#925A2B"
                },
                paragraph: "#878E99",
                blue: {...defaultTheme.colors.blue},
                indigo: {...defaultTheme.colors.indigo},
                green: {...defaultTheme.colors.green},
                red: {...defaultTheme.colors.red}
            }
        }
    },

    plugins: [require('@tailwindcss/forms')],
};
