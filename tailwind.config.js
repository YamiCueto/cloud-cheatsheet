/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'aws-orange': '#FF9900',
        'aws-dark': '#232F3E',
        'aws-light': '#F7F7F7',
        'dark': {
          'bg': '#1a1d29',
          'card': '#232837',
          'sidebar': '#1e2230',
          'border': '#2d3348',
        },
        'accent': {
          'orange': '#FF9900',
          'blue': '#3b82f6',
        }
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg, #1a1d29 0%, #232837 100%)',
      },
    },
  },
  plugins: [],
}

