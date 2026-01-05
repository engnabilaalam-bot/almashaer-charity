/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Cairo', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    500: '#007A3D',
                    600: '#006834',
                    700: '#005229',
                    800: '#004221',
                    900: '#002914',
                },
                yemen: {
                    red: '#CE1126',
                    black: '#000000',
                    white: '#FFFFFF',
                    gray: '#2d2d2d',
                }
            }
        }
    },
    plugins: [],
}
