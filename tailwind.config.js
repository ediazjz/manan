module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      '2xs': '.625rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '2.5rem',
      '7xl': '2.75rem',
    },
    extend: {
      colors: {
        primary: {
          lighter: '#95B1C0',
          light: '#7197AB',
          DEFAULT: '#4E7D96',
          dark: '#3E6478',
          darker: '#2F4B5A',
        },
        secondary: {
          lighter: '#41445E',
          light: '#292C4A',
          DEFAULT: '#111536',
          dark: '#0E112B',
          darker: '#0A0D20',
        },
        accent: {
          lighter: '#FFB593',
          light: '#FF9D6F',
          DEFAULT: '#FF844B',
          dark: '#CC6A3C',
          darker: '#B35C35',
        },
        inky: {
          lighter: '#565656',
          light: '#414141',
          DEFAULT: '#2C2C2C',
          dark: '#282828',
          darker: '#232323',
        },
        fdbk: {
          success: '#27A580',
          warning: '#E0B412',
          error: '#C94145',
        },
        neutral: {
          light: '#E3EDF2',
          dark: '#2B2D3C'
        }
      },
      fontFamily: {
        'brand': ['Amiko', 'ui-sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
