module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Adjust the paths based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sanss: ['"Source Sans 3"', 'sans-serif'],
      },
      extend: {
        'max-sm': { max: '640px' }, 
      },
    },
  },
  plugins: [],
};
