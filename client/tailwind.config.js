/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B9D',
        secondary: '#FFA07A',
        accent: '#FFD700',
        dark: '#2D3748',
        light: '#F7FAFC',
      },
      maxWidth: {
        container: '1440px',
      },
    },
  },
  plugins: [],
};
