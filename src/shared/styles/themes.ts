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
        outlinedButtonBorder: 'rgba(0, 0, 0, 0.20)'
    },
    font: {
        white: '#fff',
        black: '#000',
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
        outlinedButtonBorder: 'rgba(0, 0, 0, 0.20)'
    },
    font: {
        white: '#fff',
        black: '#000',
    },
};

export const FontColorKeys = Object.keys(light.font);
export const Themes: Record<string, AppTheme> = {light, dark};
