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

                <div
                    className="ml-[12px] border-border100 mb-[24px] border-solid border w-[48px] h-[48px] p-[10px] flex items-center justify-center rounded-full bg-transparent">
                    <Icon name="SignInBackArrow" className="w-[28px] h-[28px]"/>
                </div>

                {children}

            </main>
        </AppProvider>
    );
}
