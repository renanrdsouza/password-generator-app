/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-black": "#18171F",
        "custom-dark-gray": "#24232C",
        "custom-gray": "#817D92",
        "custom-light-gray": "#E6E5EA",
        "custom-light-green": "#A4FFAF",
        "custom-red": "#F64A4A",
        "custom-orange": "#FB7C58",
        "custom-yellow": "#F8CD65"
      },
      fontFamily: {
        "JetBrains": ["JetBrainsMono-Bold"]
      },
      width: {
        "mobile": "21.438rem",
        "mobile-button": "19.438rem",
        "mobile-checkbox-inputs": "19.201rem",
        "stregth-indicator": "0.625rem"
      },
      gridTemplateColumns: {
        "strength": "77px 200px"
      },
      content: {
        'check-icon': 'url("/icon-check.svg")'
      },
      padding: {
        '0.5': '0.188rem'
      }
    },
  },
  plugins: [],
}
