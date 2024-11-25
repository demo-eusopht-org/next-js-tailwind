/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['var(--font-inter)'],
        work: ['var(--font-work-sans)'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',  // Default padding
        sm: '2rem',       // Padding for small screens
        md: '4rem',       // Padding for medium screens
        lg: '6rem',       // Padding for large screens
        xl: '8rem',       // Padding for extra large screens
      },
    },
    },
  },
  plugins: [],
};
