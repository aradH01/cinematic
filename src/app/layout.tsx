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
        <body className="bg-signInBg">
        <AppProvider> {/* Wrap the entire app */}

                <MainLayout>

                    {children}

                </MainLayout>

        </AppProvider>
        </body>
        </html>
    );
}
