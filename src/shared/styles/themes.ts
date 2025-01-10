'use client'

export type AppTheme = typeof light;
export type FontColor = keyof typeof light.font;


const light = {
    name: 'light',
    background: '#181A20',
    components: {
        white: '#fff',
        black: '#000',

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
        white: '#fff',
        black: '#000',
    },
    font: {
        white: '#fff',
        black: '#000',
    },
};

export const FontColorKeys = Object.keys(light.font);
export const Themes: Record<string, AppTheme> = {light, dark};
