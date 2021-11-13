
module.exports = {

  content: ['./src/**/*.html'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        templatesHero: "url('../images/layout/templatesHero.png')",
        templatesMobile: "url('../images/projects/wickedtemplates.png')",
        cafHero: "url('../images/layout/cafHero.png')",
        cafMobile: "url('../images/projects/caf.png')",
        blocksHero: "url('../images/layout/blocksHero.png')",
        blocksMobile: "url('../images/projects/blocks.png')",
        serendipityHero: "url('../images/layout/serendipityHero.png')",
        serendipityMobile: "url('../images/projects/serendipity.png')",
      }),
      boxShadow: {
        DEFAULT: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        thick: 'rgba(0, 0, 0, 0.3) 0px 13px 40px, rgba(0, 0, 0, 0.2) 0px 4px 4px;',
      },
      colors: {
        peel: '#faaa00',


        tiara: '#cfdadc',
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
        ship: "#808080",
        shark: "#26282b",
        whale: "#1f2123",
      },
      fontFamily: {
        serif: ['"IBM Plex Serif"', "Lucida Bright"], // Ensure fonts with spaces have " " surrounding it.
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
          '"Segoe UI Symbol"',
        ] // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [

    require('@tailwindcss/typography'),
  ],
}