/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      sky: '#f0f9ff',
      white: '#FFFFFF',
      blue: '#2F85F7',
      'regal-blue': '#243c5a',
    },
    extend: {
      backgroundImage: {
        'hero-content': "url('../public/banner.jpg')",
      },
      spacing: {
        '136': '34rem',
      }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    }
  },
  plugins: [],
}
