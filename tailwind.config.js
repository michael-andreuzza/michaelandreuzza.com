module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {

      colors: {
        black: "#0d0d0d",
        white: "#f1f0e4",
      },
      fontFamily: {
        
        display: [
          '"NeueHaasDisplayBlack"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        ds: [
          '"NeueHaasGroteskDisp Pro Md"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
