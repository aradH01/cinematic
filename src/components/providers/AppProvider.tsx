'use client';
import { MantineProvider } from '@mantine/core';
import type { PropsWithChildren } from 'react';
import { ThemeProvider } from "@emotion/react";
import { Themes } from '@/shared/styles/themes';
import { I18nextProvider } from 'react-i18next';
import i18n from "../../../i18"; // Import I18nextProvider


export function AppProvider({ children }: PropsWithChildren) {
    console.log('AppProvider rendering:', { children, i18n });
    if (!i18n.isInitialized) {
        console.error('i18n is not initialized.');
        return <div>Loading...</div>;
    }
    return (
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={Themes.light}>
                <MantineProvider>
                    {children}
                </MantineProvider>
            </ThemeProvider>
        </I18nextProvider>
    );
}
