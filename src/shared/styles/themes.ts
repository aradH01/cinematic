'use client'

export type AppTheme = typeof light;
export type FontColor = keyof typeof light.font;


const light = {
    name: 'light',
    background: '#181A20',
    components: {
        fillButton:'#000',
        nonActive: '#92929D',
        opacityButton: 'rgba(233, 233, 233, 0.60)',
        outlinedButton: 'rgba(255, 255, 255, 0.60)',
        outlinedButtonBorder: 'rgba(0, 0, 0, 0.20)',
        inputBackground: 'rgba(0, 0, 0, 0.08)',
        border100:'rgba(255, 255, 255, 0.10)',
        green300: '#52C41A',
        blue100: '#D6E4FF',
        gray700: '#D9D9D9',
        gray500: '#8C8C8C',
        green100: '#D9F7BE',
        black200:'#171717',
        black400:'rgba(43, 43, 43, 0.80)',
        black500:'rgba(43, 43, 43, 0.90)',
        checkboxShadow: '#B1ADA9',
        checkboxActiveBorder: '#FFA39E',
        black300:'#262626',
        red300: '#FF4D4F',
        gray300: 'rgba(31, 31, 31, 0.60)',
        black800:'rgba(0, 0, 0, 0.80)',
        white500: 'rgba(255, 255, 255, 0.50)'
    },
    font: {
        white: '#fff',
        black: '#000',
        red300: '#FA541C',
        errorText: '#F5222D',
        black400 :'#595959',
        gray400 : 'rgba(255, 255, 255, 0.50)',
        white100: '#EDF0F3',
        white500:'#8C8C8C'

    },
};

const dark: AppTheme = {
    name: 'dark',
    background: '#FCFCFC',
    components: {
        fillButton:'#fff',
        nonActive: '#92929D',
        opacityButton: 'rgba(233, 233, 233, 0.60)',
        outlinedButton: 'rgba(255, 255, 255, 0.60)',
        outlinedButtonBorder: 'rgba(0, 0, 0, 0.20)',
        inputBackground: 'rgba(0, 0, 0, 0.08)',
        border100:'rgba(255, 255, 255, 0.10)',
        green300: '#52C41A',
        blue100: '#D6E4FF',
        gray700: '#D9D9D9',
        gray500: '#8C8C8C',
        green100: '#D9F7BE',
        black200:'#171717',
        black400:'rgba(43, 43, 43, 0.80)',
        black500:'rgba(43, 43, 43, 0.90)',
        checkboxShadow: '#B1ADA9',
        checkboxActiveBorder: '#FFA39E',
        black300:'#262626',
        red300: '#FF4D4F',
        gray300: 'rgba(31, 31, 31, 0.60)',
        black800:'rgba(0, 0, 0, 0.80)',
        white500: 'rgba(255, 255, 255, 0.50)'
    },
    font: {
        white: '#fff',
        black: '#000',
        red300: '#FA541C',
        errorText: '#F5222D',
        black400 :'#595959',
        gray400 : 'rgba(255, 255, 255, 0.50)',
        white100: '#EDF0F3',
        white500:'#8C8C8C'
    },
};

export const FontColorKeys = Object.keys(light.font);
export const Themes: Record<string, AppTheme> = {light, dark};
