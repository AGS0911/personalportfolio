import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        fadeInTop: {
          '0%' : { opacity: '0', transform: 'translateY(-20px)'},
          '100%' : { opacity: '1', transform: 'translateY(0)'}
        },
        fadeInLeft: {
          '0%' : { opacity: '0', transform: 'translateX(-20px)'},
          '100%' : { opacity: '1', transform: 'translateY(0)'},
        },
        fadeInRight: {
          '0%' : { opacity: '0', transform: 'translateX(+20px)'},
          '100%' : { opacity: '1', transform: 'translateY(0)'},
        }
      }, 
      animation: {
        fadeInTop: 'fadeInTop .5s ease-in',
        fadeInLeft: 'fadeInLeft .5s ease-in',
        fadeInRight: 'fadeInRight .5s ease-in'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          50: "#0872ff"
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
} satisfies Config;
