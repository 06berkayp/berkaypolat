/** @type {import('tailwindcss').Config} */
export default {

    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            xxs: '320px',
            xs: '375px',
            sm: '480px',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
            xxl: '1536px',
        },
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

