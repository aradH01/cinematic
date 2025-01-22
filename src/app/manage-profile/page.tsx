'use client'
import {Icon} from "@/components/elements/Icon";
import React from "react";
import {Typography} from "@/components/elements/Typography";
import {EditProfile} from "@/components/elements/EditProfile";
import {WhoWatching} from "@/core/constants/enums";
import {useTranslation} from "react-i18next";
import {useRouter} from "next/navigation";

export default function ManageProfilePage() {
    const {t} = useTranslation();
    const router = useRouter()
    const handleBack = () => {
        if (window.history.length > 1) {
            router.back();
        } else {
            router.push("/"); // Fallback to the home page or a default page
        }
    };
    return (
        <div className="pt-[60px] px-[12px]">
            <button onClick={handleBack}
                    className="border-border100 mb-[24px] border-solid border w-[48px] h-[48px] p-[10px] flex items-center justify-center rounded-full bg-transparent">
                <Icon name="SignInBackArrow" className="w-[28px] h-[28px]"/>
            </button>
            <Typography.Title className="!text-[40px] leading-[48px] !font-lecturis-rounded text-left" color="white"
                              weight="bold" level="h1">
                {t('who_is_watching')}
            </Typography.Title>
            <div className="flex flex-wrap items-center gap-y-[31px] gap-x-[59px] justify-center mt-[88px]">
                {
                    WhoWatching.map((avatar, index) => (
                        <EditProfile active={avatar.active} key={index} image={avatar.image} name={avatar.name}/>
                    ))
                }
                <div className="flex flex-col items-center gap-[12px]">
                    <div
                        className="bg-white p-[20px] w-[120px] h-[120px] rounded-full flex justify-center items-center">
                        <Icon name="Plus" className="w-[48px] h-[48px]"/>
                    </div>
                    <Typography.Text color="white" weight="normal" size="sm"
                                     className="leading-[24px] !font-urbanist">Add profile</Typography.Text>
                </div>
            </div>
        </div>
    )
}
