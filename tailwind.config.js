// module.exports = {
//     content: [
//       './pages/**/*.{js,ts,jsx,tsx}',  // Includes all pages
//       './components/**/*.{js,ts,jsx,tsx}', // Includes all components
//       ''
//     ],
//     theme: {
//       extend: {},
//       screens: { // Define custom breakpoints here
//         sm: '640px',  // Small screens and up (≥ 640px)
//         md: '768px',  // Medium screens and up (≥ 768px)
//         lg: '1024px', // Large screens and up (≥ 1024px)
//         xl: '1280px', // Extra large screens and up (≥ 1280px)
//         '2xl': '1536px', // Double extra large screens and up (≥ 1536px)
//       },
//     },
//     plugins: [],
//   }
  

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // Includes all pages
    './components/**/*.{js,ts,jsx,tsx}', // Includes all components
    './app/**/*.{js,ts,jsx,tsx}', // Includes the app directory
    './app/components/**/*.{js,ts,jsx,tsx}', // Specifically includes the components directory inside app
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],  // Poppins font
        kumbh: ['var(--font-kumbh)', 'sans-serif'],      // Kumbh Sans font
      },
      screens: { // Define custom breakpoints here
        sm: '640px',  // Small screens and up (≥ 640px)
        md: '768px',  // Medium screens and up (≥ 768px)
        lg: '1024px', // Large screens and up (≥ 1024px)
        xl: '1280px', // Extra large screens and up (≥ 1280px)
        '2xl': '1536px', // Double extra large screens and up (≥ 1536px)
      },
    },
  },
  plugins: [],
}
