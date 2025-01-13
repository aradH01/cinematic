import type { Config } from "tailwindcss";
import {fontFamily} from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'get-start-bg': "url('/images/getStartBg.svg')",

      },
      boxShadowColor:{
        signInNext : '0px 14px 28px 0px rgba(0, 0, 0, 0.30)'
      },
      backgroundColor:{
        signInBg: '#171717'
      },
      colors: {
        border100: 'rgba(255, 255, 255, 0.10)',
        border200: 'rgba(255, 255, 255, 0.20)',
        white800: '#EDF0F3',
        black300:'#262626',
        black900:'#0F0F10',
        white500 : 'rgba(255, 255, 255, 0.5)',
        red200: '#CF1322'
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        lecturis: ['FH Lecturis', 'serif'],
        'lecturis-rounded': ['FH Lecturis Rounded', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
