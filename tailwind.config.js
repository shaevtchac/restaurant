/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '393px',
      sm: '530px',
      md: '700px',
      lg: '900px',
      xl: '1280px',
      xxl: '1440px',
    },

    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      grandhotel: ['Grand Hotel', 'cursive'],
    },
    extend: {
      colors: {
        primary: '#ffc200',
        secondary: '#2f2f2f',
        menubg: '#00000088',
        dark: '#333333',
        light: '#f4f4f4',
      },
    },
  },

  plugins: [],
};
