import '@/shared/styles/global.css';
import '@/shared/styles/globals';
import type {Metadata} from 'next';
import {addClass} from '@/core/utils/classNames';
import React from "react";
import {AppProvider} from "@/components/providers/AppProvider";

export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function GetStartLayout({children}: { children: React.ReactNode }) {


    return (
        <html lang="en">
        <body>
        <AppProvider>
            <main
                className={addClass('w-full min-h-screen px-[24px] h-[100vh] h-[100dvh] bg-get-start-bg bg-cover bg-center')}>
                {children}
            </main>
        </AppProvider>
        </body>
        </html>
    );
}
