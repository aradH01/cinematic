import '@/shared/styles/global.css';
import '@/shared/styles/globals';
import type { Metadata } from 'next';
import { addClass } from '@/core/utils/classNames';
import MainLayout from '@/layouts/DashboardLayout/DashboardLayout';
import React from "react";
import {AppProvider} from "@/components/providers/AppProvider";

export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {


    return (
        <html lang="en">
        <body>
        <AppProvider> {/* Wrap the entire app */}
            <main className={addClass('w-full min-h-screen')}>
                <MainLayout>{children}</MainLayout>
            </main>
        </AppProvider>
        </body>
        </html>
    );
}
