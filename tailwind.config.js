const colors = require('tailwindcss/colors');
module.exports = {

  mode: 'jit',
 purge: ['./src/**/*.html'],
  theme: {
    extend: {
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
        boxShadow: {
        DEFAULT: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        thick: '0px 13px 40px rgb(0 0 0 / 30%), 0px 4px 4px rgb(0 0 0 / 20%)',
      },
       borderWidth: {
        DEFAULT: '0.5px',
        '1': '1px',

      },

      colors: {



        aluminium : '#868787',
        jumbo : '#858585',
        monsoon: '#787878',
        chicago: '#5F5F5F',
        charcoal : '#454545',
        midnight: '#2C2C2C',
        darko: '#222425',
        jungle: '#1b1d1d',
  bunker: '#111213',
  onyx: '#121212',



      },
      fontFamily: {
       mono: ['"IBM Plex Mono"', "ui-monospace"], // Ensure fonts with spaces have " " surrounding it.
        sans: [
          '"IBM Plex Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',] // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-scroll-snap'),
    require('@tailwindcss/typography'),
  ],
}