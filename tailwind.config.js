/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'aldi': ['Moirai One'],
        'Interr': ['Inter', 'sans-serif']
      },
      backgroundImage : {
        'Ornament-box' : "url(/Ornament-Box.png)",
        'arrow': 'url(/Arrow.png)',
        'shape': 'url(/Shape.png)'
      }, 
      
    }
  },
  plugins: [],
}
