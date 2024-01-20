/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary-blue-400":  "hsl(233, 26%, 24%)",
        "brand-primary-green-400":  "hsl(136, 65%, 51%)",
        "brand-primary-cyan-400":   "hsl(192, 70%, 51%)",
    
        "brand-secondary-blue-200": "hsl(233, 8%, 62%)",
        "brand-secondary-blue-50":  "hsl(220, 16%, 96%)",
        "brand-secondary-gray-50":  "hsl(0, 0%, 98%)",
      },
      screens: {
        "sm": "320px",
        "md": "600px",
        "lg": "1000px",
        "xl": "1250px"
      },
        backgroundImage: {
          'bg-mobile': "url('/assets/bg_intro_mobile.svg')",
          'bg-desktop': "url('/assets/bg_intro_desktop.svg')",
        },
        backgroundSize: {
          "50": "55%",
          "60": "60%",
          "65": "65%",
          "70": "70%",
          "100": "100%"
        },
        zIndex: {
          "100": "100",
        }
    },
    
  },
  plugins: [],
}

