import type { Config } from "tailwindcss";
import lineClamp from '@tailwindcss/line-clamp';

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
        'custom-gradient': 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 41%, rgba(255, 255, 255, 0) 57%, rgba(255, 255, 255, 0.05) 100%)',
      },
      boxShadowColor:{
        signInNext : '0px 14px 28px 0px rgba(0, 0, 0, 0.30)',
        boxShadow1 : '0px 5px 5px 0px rgba(0, 0, 0, 0.25)'
      },
      backgroundColor:{
        signInBg: '#171717',
        gray900: 'rgba(43, 43, 43, 0.90)',
        gray800: 'rgba(43, 43, 43, 0.80)'
      },
      colors: {
        border100: 'rgba(255, 255, 255, 0.10)',
        border200: 'rgba(255, 255, 255, 0.20)',
        white800: '#EDF0F3',
        black300:'#262626',
        black900:'#0F0F10',
        white500 : 'rgba(255, 255, 255, 0.5)',
        red200: '#CF1322',
        black600 : 'rgba(31, 31, 31, 0.60)',
        black100: 'rgba(0, 0, 0, 0.10)',
        white100:'#EDF0F3',
        gray500:'#8C8C8C'
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        lecturis: ['FH Lecturis', 'serif'],
        'lecturis-rounded': ['FH Lecturis Rounded', 'serif'],
      },
      keyframes: {
        progress: {
          '0%': { boxShadow: '0 0 0 4px transparent' },
          '100%': { boxShadow: '0 0 0 4px red' },
        },
      },
      animation: {
        progress: 'progress 2s linear infinite',
      },
    },
  },
  plugins: [lineClamp],
};
export default config;
