/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {

      backgroundImage: {
        'mobile-Nav-gradient': 'linear-gradient(90deg, rgba(191,191,191,1) 0%, rgba(255,255,255,1) 65%)!important',
        'custom-gradient': 'linear-gradient(90deg, rgba(232,233,233,1) 0%, rgba(255,255,255,1) 36%, rgba(255,255,255,1) 61%, rgba(230,230,230,1) 85%)',
      },

    },
  },
  plugins: [],
}

