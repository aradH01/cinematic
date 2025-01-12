import React from "react";
import '@/shared/styles/global.css';
import '@/shared/styles/globals';
import {AppProvider} from "@/components/providers/AppProvider";
import {addClass} from "@/core/utils/classNames";
import {Icon} from "@/components/elements/Icon";
import {PhoneNavbar} from "@/components/sections/PhoneNavbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <AppProvider>
            <main className={addClass('relative w-full pt-[80px] px-[12px] min-h-screen h-[100vh] h-[100dvh] bg-signInBg')}>
                {children}
                <div className="absolute bottom-[4.8rem] left-1/2 transform -translate-x-1/2 w-[296px] h-[56px]">
                    <PhoneNavbar/>
                </div>
            </main>
        </AppProvider>
    );
}
