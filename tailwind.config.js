/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        'led-strong': [
          '0 0 5px rgba(255, 255, 255, 1)',
          '0 0 15px rgba(255, 255, 255, 0.9)',
          '0 0 30px rgba(255, 255, 255, 0.7)',
        ],
        'led-medium': [
          '0 0 5px rgba(255, 255, 255, 0.8)',
          '0 0 15px rgba(255, 255, 255, 0.6)',
          '0 0 30px rgba(255, 255, 255, 0.4)',
        ],
      },
    },
  },
  plugins: [],
};
