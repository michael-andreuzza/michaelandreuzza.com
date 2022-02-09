
module.exports = {

  content: ['./src/**/*.html'],
  theme: {
    extend: {


      colors: {

        black: "#1e2028",
      },
      fontFamily: {


        sans: [
          'Machina',
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
          '"Segoe UI Symbol"',
        ] // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },

  plugins: [

  ],
}