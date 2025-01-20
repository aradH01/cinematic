import '@mantine/core/styles.css';
import '@/shared/styles/global.css';
import '@mantine/core/styles.css';
import '@/shared/styles/globals';
import type { Metadata } from 'next';
import MainLayout from '@/layouts/DashboardLayout/DashboardLayout';
import React from "react";
import {AppProvider} from "@/components/providers/AppProvider";
import '@mantine/carousel/styles.css';
import Head from "next/head";
export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {


    return (
        <html lang="en">
        <head>
            <script
                src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"
                async
            ></script>
        </head>
        <body className="bg-signInBg">
        <MainLayout>
            <AppProvider>
                {children}
            </AppProvider>
                </MainLayout>
        </body>
        </html>
    );
}
