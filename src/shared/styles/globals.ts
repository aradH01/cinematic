'use client'

import { css, SerializedStyles } from '@emotion/react';
import { ls } from '@/core/utils/localStorage';
import { settings } from '@/shared/styles/Settings';
import {string} from "zod";

export type Size = 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg';
export type ColorEffect = 'solid' | 'linear';
export type Variant = 'text' | 'contained' | 'outlined';

export const colorOptions = [
    'primary',
] as const;
export type Color = (typeof colorOptions)[number];
export const typographySizeOptions = {
    sm: '16px',
    md: '18px',
    lg: '24px',
    lt: '32px',
    xlg: '28px',
    xxlg: '48px',
    xxxlg: '82px',
};
export type TypographySize = keyof typeof typographySizeOptions;

export const typographyWeightOptions = {
    normal: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
};
export const textColorOptions = [
    'regular',
    'nonActive',
    'placeholder',
    'warning',
    'accent',
    'success',
    'danger',
    'info',
    'currentColor',
] as const;
export type TextColor = (typeof textColorOptions)[number];

export const GlobalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${settings.fontFamily};
      height: 100vh;
  }
`;


export const getIsDark = (): boolean => {
    const theme = ls.get('theme');
    const themeExistsInStorage = Boolean(theme !== null);
    return themeExistsInStorage
        ? Boolean(theme === 'dark')
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
};
export const getSize = (
  size?: Size,
  width?: string,
  borderRadius?: string,
  height?:string
): SerializedStyles => {
    if (size === 'sm') {
        return css`
      width: ${width ? width : 'auto'};
      height: ${height ? height : settings.elementHeight_sm};
      font-size: ${typographySizeOptions.sm};
      border-radius: ${borderRadius};
    `;
    }
    if (size === 'md') {
        return css`
      width: ${width ? width : '10rem'};
      height: ${settings.elementHeight_md};
      font-size: ${typographySizeOptions.md};
      border-radius: ${borderRadius};
    `;
    }
    if (size === 'lg') {
        return css`
      width: ${width ? width : '15rem'};
      height: ${settings.elementHeight_lg};
      font-size: ${typographySizeOptions.lg};
      border-radius: ${borderRadius};
    `;
    }
    if (size === 'xlg') {
        return css`
      width: ${width ? width : '15rem'};
      height: ${settings.elementHeight_xlg};
      font-size: ${typographySizeOptions.lg};
      border-radius: ${borderRadius};
    `;
    }
    return css``;
};
