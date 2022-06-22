module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {

      colors: {
        black: "#0d0d0d",
        white: "#f1f0e4",
      },
      fontFamily: {
        sans: [
          '"Inter"',
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
        ],
        display: [
          '"Ceqabro"',
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
        ], // Ensure fonts with spaces have " " surrounding it.

      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
