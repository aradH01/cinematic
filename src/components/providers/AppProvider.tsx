'use client';
import {MantineProvider} from '@mantine/core';
import type {PropsWithChildren} from 'react';
import {ThemeProvider} from "@emotion/react";
import {Themes} from '@/shared/styles/themes';
import {I18nextProvider} from 'react-i18next';
import i18n from "../../../i18";
import {GoogleOAuthProvider} from "@react-oauth/google";


export function AppProvider({children}: PropsWithChildren) {
    if (!i18n.isInitialized) {
        return <div>Loading...</div>;
    }
    return (
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''}>
            <I18nextProvider i18n={i18n}>
                <ThemeProvider theme={Themes.light}>
                    <MantineProvider>
                        {children}
                    </MantineProvider>
                </ThemeProvider>
            </I18nextProvider>
        </GoogleOAuthProvider>
    );
}
