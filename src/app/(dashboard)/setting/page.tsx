'use client'
import {Typography} from "@/components/elements/Typography";
import Image from "next/image";
import MenAvatar from '@/public/images/MenAvatar.svg'
import FemaleAvatar from '@/public/images/FemaleAvatar.svg'
import {Button, SettingButton} from "@/components/elements/Button";
import {useRouter} from "next/navigation";
import {Path} from "@/core/constants/enums";
import {useTranslation} from "react-i18next";

export default function SettingPage() {
    const router = useRouter()
    const {t} = useTranslation();
    return (
        <div className="px-[12px]">
            <div className="mt-[80px]">
                <Typography.Title className="!text-[40px] leading-[48px] !font-lecturis-rounded text-left" color="white"
                                  weight="bold" level="h1">
                    {t('settings')}
                </Typography.Title>
            </div>
            <div className="relative w-full flex justify-center mt-[24px]">
                <div className="relative w-[168px] h-[96px]">
                    <Image
                        src={MenAvatar}
                        alt="avatar-men"
                        height="96"
                        width="96"
                        className="absolute left-0 z-10"
                    />
                    <Image
                        src={FemaleAvatar}
                        alt="avatar-women"
                        height="96"
                        width="96"
                        className="absolute left-[72px] z-0 filter grayscale"
                    />
                </div>
            </div>
            <Button onClick={() => router.push(Path.ManageProfile)} title="manage_profiles"
                    className="!bg-transparent !border !border-solid !border-border100 [&>div>span]:!font-lecturis-rounded [&>div>span]:!font-normal !px-4 mt-[12px] mb-8 mx-auto"/>
            <div className="flex flex-col items-center justify-center gap-4 w-full">
                <div className="flex flex-col items-center justify-center gap-[2px] w-full">
                    <SettingButton redIcon icon="Setting" title="app_settings"/>
                    <SettingButton redIcon icon="Phone" title="devices"/>
                    <SettingButton redIcon icon="Global" title="app_language"/>
                </div>
                <div className="flex flex-col items-center justify-center gap-[2px] w-full">
                    <SettingButton icon="Question" title="support_center"/>
                    <SettingButton icon="Notes" title="privacy_terms"/>
                </div>
            </div>
        </div>
    )
}
