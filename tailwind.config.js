const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  dark: 'media',
  purge: ['./src/**/*.html'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        wickedtemplates: "url('../images/wickedtemplates.svg')",
      }),
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      boxShadow: {
        DEFAULT: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        thick: 'rgba(0, 0, 0, 0.3) 0px 13px 40px, rgba(0, 0, 0, 0.2) 0px 4px 4px;',
      },
      borderWidth: {
        DEFAULT: '0.5px',
        '1': '1px',
      },
      colors: {
        gossip: '#9cd976',

        water: '#dcdefa',
        perano: '#b8bef5',
        slate: '#636eea',
        royal: '#3f4ee4',
        palatino: '#2f3ee3',
        leblue: '#1d2ee0',


        
        ebony: '#050722',
        tiara: '#bfd3d6',
        smoke: "#f0f0f0",
        santa: "#a0a1b2",
        comet: "#5b617a",
        bay: "#50566c",
        river: "#464a5d",
        bright: "#3c3e4e",
        tuna: "#313340",
        haiti: "#2c2c35",
        cinder: "#252731",
        pearl: "#1e2028",
        mirage: "#1a1c23",
      },
      fontFamily: {
        sans: [
          'Inter',
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
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-scroll-snap'),
    require('@tailwindcss/typography'),
  ],
}