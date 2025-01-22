import React from "react";
import '@/shared/styles/global.css';
import '@/shared/styles/globals';
import {AppProvider} from "@/components/providers/AppProvider";
import {addClass} from "@/core/utils/classNames";
import {Icon} from "@/components/elements/Icon";

export default function SignInLayout({ children }: { children: React.ReactNode }) {
    return (
        <AppProvider>
            <main className={addClass('relative w-full pt-[60px] min-h-screen h-[100vh] h-[100dvh] bg-signInBg')}>

                {children}

            </main>
        </AppProvider>
    );
}
